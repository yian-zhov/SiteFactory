/* chart.js - Zi Wei Dou Shu chart calculation in the browser.
 * Port of mingli-master's calculate_chart.py, backed by the iztro UMD bundle.
 * Produces the same chart JSON shape the interpretation prompt expects. */
(function (global) {
  'use strict';

  // iztro may return i18n keys or already-translated strings depending on
  // language config; map defensively (unknown values pass through as-is).
  var BRANCH_CN = {
    ziEarthly: '子', chouEarthly: '丑', yinEarthly: '寅', maoEarthly: '卯',
    chenEarthly: '辰', siEarthly: '巳', wuEarthly: '午', weiEarthly: '未',
    shenEarthly: '申', youEarthly: '酉', xuEarthly: '戌', haiEarthly: '亥'
  };

  var STEM_CN = {
    jiaHeavenly: '甲', yiHeavenly: '乙', bingHeavenly: '丙', dingHeavenly: '丁',
    wuHeavenly: '戊', jiHeavenly: '己', gengHeavenly: '庚', xinHeavenly: '辛',
    renHeavenly: '壬', guiHeavenly: '癸'
  };

  var FIVE_ELEMENTS_CN = {
    water2: '水二局', wood3: '木三局', metal4: '金四局',
    earth5: '土五局', fire6: '火六局'
  };

  var MUTAGEN_CN = { '禄': '化禄', '权': '化权', '科': '化科', '忌': '化忌' };

  var HOUR_NAMES = [
    '早子时', '丑时', '寅时', '卯时', '辰时', '巳时', '午时',
    '未时', '申时', '酉时', '戌时', '亥时', '晚子时'
  ];

  function cnBranch(v) { return BRANCH_CN[v] || v || ''; }
  function cnStem(v) { return STEM_CN[v] || v || ''; }
  function starName(s) { return (s && (s.name || s.toString())) || ''; }

  // Build the chart data object from birth info.
  // birth: { date: 'YYYY-M-D', isLunar, isLeap, hourIndex (0-12), gender ('男'|'女') }
  function buildChart(birth) {
    var astro = global.iztro && global.iztro.astro;
    if (!astro) throw new Error('iztro library not loaded');

    var astrolabe = birth.isLunar
      ? astro.byLunar(birth.date, birth.hourIndex, birth.gender, !!birth.isLeap, true, 'zh-CN')
      : astro.bySolar(birth.date, birth.hourIndex, birth.gender, true, 'zh-CN');

    var soulBranch = cnBranch(astrolabe.earthlyBranchOfSoulPalace);
    var bodyBranch = cnBranch(astrolabe.earthlyBranchOfBodyPalace);
    var fiveElements = FIVE_ELEMENTS_CN[astrolabe.fiveElementsClass] || astrolabe.fiveElementsClass;

    var yearMutagens = [];
    var palaces = [];
    var emptyPalaces = [];

    astrolabe.palaces.forEach(function (p) {
      var majorStars = (p.majorStars || []).filter(function (s) {
        // iztro lists lucun/tianma inside majorStars with type != 'major'
        return !s.type || s.type === 'major';
      });
      var extraMajor = (p.majorStars || []).filter(function (s) {
        return s.type && s.type !== 'major';
      });
      var minorStars = extraMajor.concat(p.minorStars || []);

      var major = majorStars.map(starName);
      var minor = minorStars.map(starName);
      var adj = (p.adjectiveStars || []).slice(0, 5).map(starName);

      var starMutagens = [];
      majorStars.concat(minorStars).forEach(function (s) {
        if (s.mutagen) {
          starMutagens.push({ star: starName(s), mutagen: s.mutagen });
          yearMutagens.push({
            star: starName(s),
            mutagen: MUTAGEN_CN[s.mutagen] || s.mutagen,
            palace: p.name,
            branch: cnBranch(p.earthlyBranch)
          });
        }
      });

      var dec = p.decadal || {};
      var range = dec.range || [];
      var branch = cnBranch(p.earthlyBranch);

      var tags = [];
      if (p.name === '命宫') tags.push('命宫');
      if (p.isBodyPalace) tags.push('身宫');
      if (!major.length) emptyPalaces.push(branch);

      palaces.push({
        name: p.name,
        heavenly_stem: cnStem(p.heavenlyStem),
        earthly_branch: branch,
        dizhi: cnStem(p.heavenlyStem) + branch,
        major_stars: major,
        minor_stars: minor,
        adjective_stars: adj,
        mutagens: starMutagens,
        is_empty: !major.length,
        decadal_range: range.length === 2 ? range[0] + '-' + range[1] : '',
        decadal_dizhi: cnStem(dec.heavenlyStem) + cnBranch(dec.earthlyBranch),
        tags: tags,
        index: p.index
      });
    });

    // Current decadal: nominal age (xusui) located within a palace's range.
    var birthYear = parseInt(String(astrolabe.solarDate).split('-')[0], 10);
    var age = new Date().getFullYear() - birthYear + 1;
    var currentDecadal = null;
    palaces.forEach(function (p) {
      var m = /^(\d+)-(\d+)$/.exec(p.decadal_range);
      if (m && age >= +m[1] && age <= +m[2]) {
        currentDecadal = {
          branch: p.earthly_branch,
          range: p.decadal_range,
          display: p.earthly_branch + '宫·' +
            (p.major_stars.length ? p.major_stars.join('·') : '空宫') +
            '（' + p.decadal_range + '岁）'
        };
      }
    });

    return {
      solar_date: astrolabe.solarDate,
      lunar_date: astrolabe.lunarDate,
      chinese_date: astrolabe.chineseDate,
      gender: birth.gender,
      hour_index: birth.hourIndex,
      hour_name: HOUR_NAMES[birth.hourIndex] || '',
      nominal_age: age,
      five_elements: fiveElements,
      soul_palace_branch: soulBranch,
      body_palace_branch: bodyBranch,
      current_decadal: currentDecadal,
      year_mutagens: yearMutagens,
      empty_palaces: emptyPalaces,
      palaces: palaces
    };
  }

  global.MingliChart = { buildChart: buildChart, HOUR_NAMES: HOUR_NAMES };
})(window);
