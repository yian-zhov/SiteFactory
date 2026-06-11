/* render.js - Fill the chart HTML template with chart + reading data.
 * Port of mingli-master's generate_html.py. Output is rendered into a
 * sandboxed iframe (no scripts) and offered as a downloadable HTML file. */
(function (global) {
  'use strict';

  var CN_NUMS = ['一', '二', '三', '四', '五', '六', '七'];
  var BRANCH_GRID = {
    '巳': [1, 1], '午': [1, 2], '未': [1, 3], '申': [1, 4],
    '辰': [2, 1], '酉': [2, 4],
    '卯': [3, 1], '戌': [3, 4],
    '寅': [4, 1], '丑': [4, 2], '子': [4, 3], '亥': [4, 4]
  };
  var HUA_CLASSES = { '化禄': 'hua-lu', '化权': 'hua-quan', '化科': 'hua-ke', '化忌': 'hua-ji' };

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // Reading bodies come from the LLM and may use a small allowed tag set
  // (strong/em/span/br). Strip anything executable before injecting.
  function sanitizeRich(html) {
    var s = String(html == null ? '' : html);
    s = s.replace(/<\s*(script|style|iframe|object|embed|link|meta)[^>]*>/gi, '');
    s = s.replace(/<\/\s*(script|style|iframe|object|embed)\s*>/gi, '');
    s = s.replace(/\son\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, '');
    s = s.replace(/javascript\s*:/gi, '');
    return s;
  }

  function buildPalaceCell(p, soulBranch, currentDecadalBranch) {
    var classes = ['palace'];
    if (p.earthly_branch === soulBranch) classes.push('active');
    if (p.earthly_branch === currentDecadalBranch) classes.push('current-limit');

    var stars = '';
    if (p.major_stars.length) {
      p.major_stars.forEach(function (s) {
        stars += '<span class="star main">' + esc(s) + '</span>';
        var mut = (p.mutagens || []).filter(function (m) { return m.star === s; })[0];
        if (mut) stars += '<span class="star four-hua">' + esc(s + mut.mutagen) + '</span>';
      });
      (p.minor_stars || []).forEach(function (s) {
        stars += '<span class="star">' + esc(s) + '</span>';
        var mut = (p.mutagens || []).filter(function (m) { return m.star === s; })[0];
        if (mut) stars += '<span class="star four-hua">' + esc(s + mut.mutagen) + '★</span>';
      });
    } else {
      stars = '<span class="star empty">空宫</span>';
    }

    var badges = '';
    (p.tags || []).forEach(function (tag) {
      if (tag === '命宫') badges += '<div class="palace-badge badge-ming">命宫</div>';
      if (tag === '身宫') badges += '<div class="palace-badge badge-body">身宫</div>';
    });
    if (p.earthly_branch === currentDecadalBranch && !(p.tags || []).length) {
      badges += '<div class="palace-badge badge-limit">当前大限</div>';
    }

    return '<div class="' + classes.join(' ') + '">' +
      '<div class="palace-name">' + esc(p.name) + '</div>' +
      '<div class="palace-dizhi">' + esc(p.earthly_branch) + '</div>' +
      '<div class="palace-stars">' + stars + '</div>' + badges + '</div>';
  }

  function buildPalaceGrid(palaces, soulBranch, currentDecadalBranch) {
    var grid = {};
    palaces.forEach(function (p) {
      var pos = BRANCH_GRID[p.earthly_branch];
      if (pos) grid[pos[0] + ',' + pos[1]] = buildPalaceCell(p, soulBranch, currentDecadalBranch);
    });
    var cells = [];
    for (var row = 1; row <= 4; row++) {
      for (var col = 1; col <= 4; col++) {
        if ((row === 2 || row === 3) && (col === 2 || col === 3)) continue;
        cells.push(grid[row + ',' + col] || '<div class="palace"></div>');
      }
    }
    return cells.join('\n    ');
  }

  function buildFourHuaTags(yearMutagens) {
    return (yearMutagens || []).map(function (m) {
      return '<span class="hua-tag ' + (HUA_CLASSES[m.mutagen] || '') + '">' +
        esc(m.star + m.mutagen) + '</span>';
    }).join('\n        ');
  }

  function buildReadingCards(reading) {
    return (reading.cards || []).map(function (card, i) {
      var num = CN_NUMS[i] || String(i + 1);
      var classes = ['reading-card'];
      if (card.full) classes.push('full');
      if (card.highlight) classes.push('highlight');
      if (card.teal) classes.push('teal-highlight');

      var probs = '';
      (card.probabilities || []).forEach(function (pb) {
        var pct = Math.max(0, Math.min(100, parseInt(pb.pct, 10) || 0));
        probs += '<div class="prob-bar"><span class="prob-label">' + esc(pb.label) +
          '</span><div class="prob-track"><div class="prob-fill" style="width:' + pct +
          '%"></div></div><span class="prob-pct">' + pct + '%</span></div>';
      });

      return '<div class="' + classes.join(' ') + '" data-num="' + num + '">' +
        '<div class="card-title">' + esc(card.title) + '</div>' +
        '<div class="card-stars-badge">' + esc(card.badge || '') + '</div>' +
        '<div class="card-body">' + sanitizeRich(card.body) + '</div>' +
        (probs ? '<div style="margin-top:16px;">' + probs + '</div>' : '') + '</div>';
    }).join('\n    ');
  }

  function buildHandSection(hand) {
    if (!hand || !(hand.items || []).length) return '';
    var cards = hand.items.map(function (item) {
      var tag = '';
      if (item.status === 'match') {
        tag = '<div class="conflict-tag match">' + esc(item.status_text) + '</div>';
      } else if (item.status === 'conflict') {
        tag = '<div class="conflict-tag conflict">' + esc(item.status_text) + '</div>';
        if (item.resolution) {
          tag += '<div style="font-size:11px;color:var(--ivory-dim);margin-top:6px;line-height:1.7;">取舍：' +
            sanitizeRich(item.resolution) + '</div>';
        }
      }
      return '<div class="hand-card"><div class="hand-card-title">' + esc(item.title) +
        '</div><div class="hand-card-body">' + sanitizeRich(item.body) + '</div>' + tag + '</div>';
    }).join('\n');
    return '<div class="section-title">手相互证</div>' +
      '<div class="hand-section"><div class="hand-grid">' + cards + '</div></div>';
  }

  function buildCalibration(questions) {
    return (questions || []).slice(0, 5).map(function (q, i) {
      var hint = q.hint ? '<span>' + esc(q.hint) + '</span>' : '';
      return '<div class="cal-q"><div class="cal-num">' + (CN_NUMS[i] || i + 1) +
        '</div><div class="cal-text">' + esc(q.text) + hint + '</div></div>';
    }).join('\n');
  }

  // Render full report HTML from template + chart + reading.
  function render(template, chart, reading) {
    var soulPalace = (chart.palaces || []).filter(function (p) {
      return (p.tags || []).indexOf('命宫') >= 0;
    })[0];
    var soulStars = soulPalace && soulPalace.major_stars.length
      ? soulPalace.major_stars.join('·') : '空宫（借对宫星曜）';

    var decadalBranch = reading.current_decadal_branch ||
      (chart.current_decadal && chart.current_decadal.branch) || '';
    var decadalDisplay = reading.current_decadal_display ||
      (chart.current_decadal && chart.current_decadal.display) || '';

    var yearSB = (chart.chinese_date || '').split(' ')[0] || '';

    var replacements = {
      '{{YEAR_STEM}}': esc(yearSB[0] || ''),
      '{{YEAR_BRANCH}}': esc(yearSB[1] || ''),
      '{{HOUR_NAME}}': esc(chart.hour_name || ''),
      '{{LUNAR_DATE}}': esc(chart.lunar_date || ''),
      '{{GENDER}}': esc(chart.gender || ''),
      '{{FIVE_ELEMENTS}}': esc(chart.five_elements || ''),
      '{{SOUL_PALACE_BRANCH}}': esc(chart.soul_palace_branch || ''),
      '{{SOUL_PALACE_STARS}}': esc(soulStars),
      '{{CURRENT_DECADAL}}': esc(decadalDisplay),
      '{{PALACE_CELLS}}': buildPalaceGrid(chart.palaces || [], chart.soul_palace_branch, decadalBranch),
      '{{FOUR_HUA_TAGS}}': buildFourHuaTags(chart.year_mutagens),
      '{{DATE_INFO}}': chart.solar_date ? '公历 ' + esc(chart.solar_date) : '',
      '{{LUNAR_INFO}}': chart.lunar_date ? '农历 ' + esc(chart.lunar_date) : '',
      '{{READING_CARDS}}': buildReadingCards(reading),
      '{{HAND_SECTION}}': buildHandSection(reading.hand_reading),
      '{{CALIBRATION_QUESTIONS}}': buildCalibration(reading.calibration_questions)
    };

    var html = template;
    Object.keys(replacements).forEach(function (key) {
      html = html.split(key).join(replacements[key]);
    });
    return html;
  }

  global.MingliRender = { render: render };
})(window);
