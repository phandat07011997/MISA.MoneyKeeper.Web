export var categories = {
    categoriesEx: [
        {
            abc: "#1",
            name: "Ăn uống",
            allowToEdit: true,
            icon: "fas fa-utensils",
            note: '',
            childs: [
                { name: "Ăn tiệm", icon: "fas fa-store", note: '' },
                { name: "Cafe", icon: "fas fa-coffee", note: '' },
                { name: "Đi chợ/siêu thị", icon: "fas fa-synagogue", note: '' }
            ],

        },
        {
            abc: "#2",
            name: "Cho vay",
            allowToEdit: false,
            icon: "fas fa-money-bill-wave",
            note: '',
        },
        {
            name: "Con cái",
            icon: "fas fa-baby",
            allowToEdit: true,
            note: '',
            childs: [
                {  name: "Đồ chơi", icon: "fab fa-playstation", note: '' },
                {  name: "Học phí", icon: "fas fa-money-check-alt", note: '' },
                { name: "Sách vở", icon: "fas fa-book-open", note: '' },
                { name: "Sữa", icon: "fas fa-blender", note: '' },
                { name: "Tiền tiêu vặt", icon: "fas fa-money-bill-wave", note: '' }
            ],
        },
        {
            name: "Dịch vụ sinh hoạt",
            icon: "fab fa-amazon",
            allowToEdit: true,
            note: '',
            childs: [
                { name: "Điện", icon: "fas fa-plug", note: '' },
                { name: "Điện thoại cố định", icon: "fas fa-phone-alt", note: '' },
                { name: "Điện thoại di động", icon: "fas fa-mobile", note: '' },
                { name: "Gas", icon: "fas fa-burn", note: '' },
                { name: "Internet", icon: "fas fa-wifi", note: '' },
                { name: "Nước", icon: "fas fa-water", note: '' },
                { name: "Thuê người giúp việc", icon: "far fa-building", note: '' },
                { name: "Truyền hình", icon: "fas fa-tv", note: '' }
            ],

        },
        {
            name: "Đi lại",
            allowToEdit: true,
            icon: 'fas fa-directions',
            note: '',
            childs: [
                { name: "Bảo hiểm xe", icon: "fas fa-user-shield", note: '' },
                { name: "Gửi xe", icon: "fas fa-parking", note: '' },
                { name: "Rửa xe", icon: "fas fa-recycle", note: '' },
                { name: "Sửa chữa, bảo dưỡng xe", icon: "fas fa-tools", note: '' },
                { name: "Taxi/thuê xe", icon: "fas fa-taxi", note: '' },
                { name: "Xăng xe", icon: "fas fa-gas-pum", note: '' }
            ]
        },
        {
            name: "Hiếu hỉ",
            allowToEdit: true,
            icon: 'fas fa-award',
            note: '',
            childs: [
                { name: "Biếu tặng", icon: "fas fa-gift", note: '' },
                { name: "Cưới xin", icon: "fas fa-hand-holding-heart", note: '' },
                { name: "Ma chay", icon: "far fa-dizzy", note: '' },
                { name: "Thăm hỏi", icon: "fas fa-procedures", note: '' }
            ]
        },
        {
            name: "Hưởng thụ",
            allowToEdit: true,
            icon: 'fas fa-spa',
            note: '',
            childs: [
                { name: "Du lịch", icon: 'fas fa-plane-departure', note: '' },
                { name: "Làm đẹp", icon: 'far fa-snowflake', note: '' },
                { name: "Mỹ phẩm", icon: 'fas fa-wine-bottle', note: '' },
                { name: "Phim ảnh ca nhạc", icon: 'fas fa-video', note: '' },
                { name: "Vui chơi giải trí", icon: 'fas fa-headphones-alt', note: '' }
            ]
        },
        {
            name: "Nhà cửa",
            allowToEdit: true,
            icon: 'far fa-building',
            note: '',
            childs: [
                { name: "Mua sắm đồ đạc", icon: 'fas fa-mobile-alt', note: '' },
                { name: "Sửa chữa nhà cửa", icon: 'fas fa-tools', note: '' },
                { name: "Thuê nhà", icon: 'fas fa-truck-moving', note: '' }
            ]
        },
        {
            name: "Phát triển bản thân",
            allowToEdit: true,
            note: '',
            childs: [
                { name: "Giao lưu, quan hệ", icon: 'far fa-handshake', note: '' },
                { name: "Học hành", icon: 'fas fa-laptop-code', note: '' }
            ]
            , icon: 'far fa-user-circle'
        },
        {
            name: "Sức khỏe",
            allowToEdit: true,
            note: '',
            childs: [
                { name: "Khám chữa bệnh", icon: 'fas fa-stethoscope', note: '' },
                { name: "Thể thao", icon: 'fas fa-dumbbell', note: '' },
                { name: "Thuốc men", icon: 'fas fa-notes-medical', note: '' }
            ]
            , icon: 'fas fa-heartbeat'
        },
        {
            name: "Trả nợ",
            allowToEdit: false,
            icon: 'fas fa-money-bill-wave',
            note: '',
        },
        {
            name: "Trang phục",
            allowToEdit: true,
            note: '',
            childs: [
                { name: "Giầy dép", icon: 'fas fa-shoe-prints', note: '' },
                { name: "Phụ kiện khác", icon: 'fas fa-mitten', note: '' },
                { name: "Quần áo", icon: 'fas fa-user-tie', note: '' }
            ], icon: 'fas fa-tshirt'
        },
    ],
    categoriesIn: [
        { name: "Đi vay", allowToEdit: false, note: '', icon: 'fas fa-hand-holding-usd' },
        { name: "Được cho/tặng", allowToEdit: true, note: '', icon: 'fas fa-gift' },
        { name: "Khác", allowToEdit: true, note: '', icon: 'fas fa-box' },
        { name: "Lãi tiết kiệm", allowToEdit: false, note: '', icon: 'fas fa-coins' },
        { name: "Lương", allowToEdit: true, note: '', icon: 'fas fa-money-check-alt' },
        { name: "Thu nợ", allowToEdit: false, note: '', icon: 'fas fa-funnel-dollar' },
        { name: "Thưởng", allowToEdit: true, note: '', icon: 'fas fa-wallet' },
        { name: "Tiền lãi", allowToEdit: true, note: '', icon: 'fas fa-file-invoice-dollar' },
    ]
}