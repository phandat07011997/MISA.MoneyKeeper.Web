export var categories = {
    categoriesEx: [
        {
            id: 1,
            abc: "#1",
            name: "Ăn uống",
            allowToEdit: true,
            note: '#anuong',
            note1: 'anuong',
            icon: "fas fa-utensils",
            childs: [
                { id: 1, name: "Ăn tiệm", icon: "fas fa-store" },
                { id: 2, name: "Cafe", icon: "fas fa-coffee" },
                { id: 3, name: "Đi chợ/siêu thị", icon: "fas fa-synagogue" }
            ],

        },
        {
            id: 2,
            abc: "#2",
            name: "Cho vay",
            allowToEdit: false,
            note: '#chovay',
            note1: 'chovay',
            icon: "fas fa-money-bill-wave",
        },
        {
            id: 3,
            name: "Con cái",
            icon: "fas fa-baby",
            allowToEdit: true,
            note: '#concai',
            note1: 'concai',
            childs: [
                { id: 1, name: "Đồ chơi", icon: "fab fa-playstation" },
                { id: 2, name: "Học phí", icon: "fas fa-money-check-alt" },
                { id: 3, name: "Sách vở", icon: "fas fa-book-open" },
                { id: 4, name: "Sữa", icon: "fas fa-blender" },
                { id: 5, name: "Tiền tiêu vặt", icon: "fas fa-money-bill-wave" }
            ],
        },
        {
            id: 4,
            name: "Dịch vụ sinh hoạt",
            icon: "fab fa-amazon",
            allowToEdit: true,
            note: '#sinhhoat',
            note1: 'sinhhoat',
            childs: [
                { id: 1, name: "Điện", icon: "fas fa-plug" },
                { id: 2, name: "Điện thoại cố định", icon: "fas fa-phone-alt" },
                { id: 3, name: "Điện thoại di động", icon: "fas fa-mobile" },
                { id: 4, name: "Gas", icon: "fas fa-burn" },
                { id: 5, name: "Internet", icon: "fas fa-wifi" },
                { id: 6, name: "Nước", icon: "fas fa-water" },
                { id: 7, name: "Thuê người giúp việc", icon: "far fa-building" },
                { id: 8, name: "Truyền hình", icon: "fas fa-tv" }
            ],

        },
        {
            id: 5,
            name: "Đi lại",
            allowToEdit: true,
            icon: 'fas fa-directions',
            note: '#dilai',
            note1: 'dilai',
            childs: [
                { id: 1, name: "Bảo hiểm xe", icon: "fas fa-user-shield" },
                { id: 2, name: "Gửi xe", icon: "fas fa-parking" },
                { id: 3, name: "Rửa xe", icon: "fas fa-recycle" },
                { id: 4, name: "Sửa chữa, bảo dưỡng xe", icon: "fas fa-tools" },
                { id: 5, name: "Taxi/thuê xe", icon: "fas fa-taxi" },
                { id: 6, name: "Xăng xe", icon: "fas fa-gas-pum" }
            ]
        },
        {
            id: 6,
            name: "Hiếu hỉ",
            allowToEdit: true,
            note: '#hieuhi',
            note1: 'hieuhi',
            icon: 'fas fa-award',
            childs: [
                { id: 1, name: "Biếu tặng", icon: "fas fa-gift" },
                { id: 2, name: "Cưới xin", icon: "fas fa-hand-holding-heart" },
                { id: 3, name: "Ma chay", icon: "far fa-dizzy" },
                { id: 4, name: "Thăm hỏi", icon: "fas fa-procedures" }
            ]
        },
        {
            id: 7,
            name: "Hưởng thụ",
            allowToEdit: true,
            note: '#huongthu',
            note1: 'huongthu',
            icon: 'fas fa-spa',
            childs: [
                { id: 1, name: "Du lịch", icon: 'fas fa-plane-departure' },
                { id: 2, name: "Làm đẹp", icon: 'far fa-snowflake' },
                { id: 3, name: "Mỹ phẩm", icon: 'fas fa-wine-bottle' },
                { id: 4, name: "Phim ảnh ca nhạc", icon: 'fas fa-video' },
                { id: 5, name: "Vui chơi giải trí", icon: 'fas fa-headphones-alt' }
            ]
        },
        {
            id: 8,
            name: "Nhà cửa",
            allowToEdit: true,
            icon: 'far fa-building',
            note: '#nhacua',
            note1: 'nhacua',
            childs: [
                { id: 1, name: "Mua sắm đồ đạc", icon: 'fas fa-mobile-alt' },
                { id: 2, name: "Sửa chữa nhà cửa", icon: 'fas fa-tools' },
                { id: 3, name: "Thuê nhà", icon: 'fas fa-truck-moving' }
            ]
        },
        {
            id: 9,
            name: "Phát triển bản thân",
            allowToEdit: true,
            note: '#phattrienbanthan',
            note1: 'phattrienbanthan',
            childs: [
                { id: 1, name: "Giao lưu, quan hệ", icon: 'far fa-handshake' },
                { id: 2, name: "Học hành", icon: 'fas fa-laptop-code' }
            ]
            , icon: 'far fa-user-circle'
        },
        {
            id: 10,
            name: "Sức khỏe",
            allowToEdit: true,
            note: '#suckhoe',
            note1: 'suckhoe',
            childs: [
                { id: 1, name: "Khám chữa bệnh", icon: 'fas fa-stethoscope' },
                { id: 2, name: "Thể thao", icon: 'fas fa-dumbbell' },
                { id: 3, name: "Thuốc men", icon: 'fas fa-notes-medical' }
            ]
            , icon: 'fas fa-heartbeat'
        },
        {
            id: 11,
            name: "Trả nợ",
            allowToEdit: false,
            note: '#trano',
            note1: 'trano',
            icon: 'fas fa-money-bill-wave'
        },
        {
            id: 12,
            name: "Trang phục",
            allowToEdit: true,
            note: '#trangphuc',
            note1: 'trangphuc',
            childs: [
                { id: 1, name: "Giầy dép", icon: 'fas fa-shoe-prints' },
                { id: 2, name: "Phụ kiện khác", icon: 'fas fa-mitten' },
                { id: 3, name: "Quần áo", icon: 'fas fa-user-tie' }
            ], icon: 'fas fa-tshirt'
        },
    ],
    categoriesIn: [
        { id: 1, name: "Đi vay", allowToEdit: false, note: '', icon: 'fas fa-hand-holding-usd' },
        { id: 2, name: "Được cho/tặng", allowToEdit: true, note: '', icon: 'fas fa-gift' },
        { id: 3, name: "Khác", allowToEdit: true, note: '', icon: 'fas fa-box' },
        { id: 4, name: "Lãi tiết kiệm", allowToEdit: false, note: '', icon: 'fas fa-coins' },
        { id: 5, name: "Lương", allowToEdit: true, note: '', icon: 'fas fa-money-check-alt' },
        { id: 6, name: "Thu nợ", allowToEdit: false, note: '', icon: 'fas fa-funnel-dollar' },
        { id: 7, name: "Thưởng", allowToEdit: true, note: '', icon: 'fas fa-wallet' },
        { id: 8, name: "Tiền lãi", allowToEdit: true, note: '', icon: 'fas fa-file-invoice-dollar' },
    ]
}