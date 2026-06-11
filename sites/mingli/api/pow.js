/* api/pow.js - Issue proof-of-work challenges.
 * The client must burn a little CPU (invisible to real users; solved in the
 * background while they type) before each /api/chat call, which makes
 * mass-scripted abuse of the free DeepSeek proxy expensive.
 * Stateless: the challenge is signed with a key derived from the API key,
 * so no storage and no extra env var are needed. */

'use strict';

const crypto = require('crypto');

function powKey() {
  return crypto.createHash('sha256')
    .update(`${process.env.DEEPSEEK_API_KEY || ''}:mingli-pow`)
    .digest();
}

function sign(ts) {
  return crypto.createHmac('sha256', powKey()).update(String(ts)).digest('hex');
}

module.exports = (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  const ts = Date.now();
  res.status(200).json({ ts, sig: sign(ts), bits: 16 });
};

module.exports.sign = sign;
