let productArray = 
[
    {
        productName: 'iPad Air',
        baseImg: 'iPad產品總圖.jpg',
        basePrice: 30000,
        specArray: [ 
            {
                title: "機型",
                key: 'model',
                options: [
                    { data: '9吋顯示器', extraPrice: 0, description: 'Liquid Retina 顯示器', },
                    { data: '12.2吋顯示器', extraPrice: 10000, description: 'Liquid Retina XDR 顯示器', },
                ],
                changePrice:true,
            },
            {
                title: "外觀",
                key: 'color',
                options: [
                    { data: '#777', description: '太空灰色', src: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-select-wifi-spacegray-202203?wid=470&hei=556&fmt=png-alpha&.v=1645066742664'},
                    { data: '#faa', description: '粉紅色', src: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-select-wifi-pink-202203?wid=470&hei=556&fmt=png-alpha&.v=1645066399526'},
                    { data: '#A020F0', description: '紫色', src: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-select-wifi-purple-202203?wid=470&hei=556&fmt=png-alpha&.v=1645066730601'},
                    { data: '#4169E1', description: '藍色', src: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-select-wifi-blue-202203?wid=470&hei=556&fmt=png-alpha&.v=1645065732688'},
                    { data: '#FFFFCC', description: '星光色', src: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-select-wifi-starlight-202203?wid=470&hei=556&fmt=png-alpha&.v=1645895139236'},
                ],
                choosed: null,
                changePrice:false,
                changeImg:true,
            },
            {
                title: '儲存裝置',
                key: 'storage',
                options: [
                    { data: '128GB', extraPrice: 0, },
                    { data: '256GB', extraPrice: 1000, },
                    { data: '512GB', extraPrice: 2000, },
                    { data: '1TB', extraPrice: 4000, },
                ],
                choosed: null,
                changePrice:true,
                changeImg:false,
            },
            {
                title: '連線能力',
                key: 'network',
                options: [
                    { data: 'Wi-Fi', extraPrice: 0, },
                    { data: 'Wi-Fi + 行動網路', extraPrice: 5000, },
                ],
                choosed: null,
                changePrice:true,
                changeImg:false,
            },
        ],
    },
//     {
//         productName: 'iPone',
//         baseImg: 'iPad產品總圖.jpg',
//         basePrice: 10000,
//         specArray: [ 
//             {
//                 title: "機型",
//                 key: 'model',
//                 options: [
//                     { data: '9吋顯示器', extraPrice: 0, description: 'Liquid Retina 顯示器', },
//                     { data: '12.2吋顯示器', extraPrice: 10000, description: 'Liquid Retina XDR 顯示器', },
//                 ],
//                 choosed: null,
//                 changePrice:true,
//                 changeImg:true
//             },
//             {
//                 title: "外觀",
//                 key: 'color',
//                 options: [
//                     { data: '#777', description: '太空灰色', },
//                     { data: '#ddd', description: '銀色', },
//                     { data: '#faa', description: '玫瑰金色', },
//                     { data: '#0f0', description: '綠色', },
//                 ],
//                 choosed: null,
//                 changePrice:false,
//                 changeImg:true
//             },
//             {
//                 title: '儲存裝置',
//                 key: 'storage',
//                 options: [
//                     { data: '128GB', extraPrice: 0, },
//                     { data: '256GB', extraPrice: 1000, },
//                     { data: '512GB', extraPrice: 2000, },
//                     { data: '1TB', extraPrice: 4000, },
//                 ],
//                 choosed: null,
//                 changePrice:true,
//                 changeImg:false
//             },
//         ]
//     },
]