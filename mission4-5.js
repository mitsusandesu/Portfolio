function drawOmikuji() {
    // おみくじの結果をランダムに選ぶ
    const results = [
        { image: 'daikichi.png', text: '大吉' },
        { image: 'kichi.png', text: '吉' },
        { image: 'chuukichi.png', text: '中吉' },
        { image: 'syoukichi.png', text: '小吉' },
        { image: 'suekichi.png', text: '末吉' },
        { image: 'kyou.png', text: '凶' },
        { image: 'daikyou.png', text: '大凶' }
    ];

    const randomIndex = Math.floor(Math.random() * results.length);
    const selectedResult = results[randomIndex];

    // 初期ページを非表示にし、結果ページを表示
    document.getElementById('initial-page').style.display = 'none';
    document.getElementById('result-page').style.display = 'block';

    // 結果画像を設定
    document.getElementById('omikuji-result').src = selectedResult.image;
}