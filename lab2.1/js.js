// Mảng kết hợp [phút, hành động] ghi lại những sự kiện xảy ra trong trận đấu
let matchLogs = [
    [17, 'GOAL'],
    [36, 'Substitution'],
    [47, 'GOAL'],
    [64, 'Yellow card'],
    [69, 'red card'],
    [70, 'Substitution'],
    [72, 'Substitution'],
    [76, 'GOAL'],
    [80, 'GOAL'],
    [92, 'Yellow card'],
];

// 1. Tạo mảng các sự kiện khác nhau xảy ra trong suốt trận đấu (lưu ý không trùng nhau)
let uniqueEvents = [...new Set(matchLogs.map(log => log[1]))];

// 2. Sau khi trò chơi kết thúc, xóa sự kiện thẻ vàng ở phút 64 khỏi danh sách sự kiện
matchLogs = matchLogs.filter(log => !(log[0] === 64 && log[1] === 'Yellow card'));

// 3. In ra console theo định dạng yêu cầu
const totalEvents = matchLogs.length;
const averageEventsPerMinute = totalEvents / 90;

console.log(`${totalEvents} sự kiện xảy ra, trung bình mỗi ${Math.round(90 / averageEventsPerMinute)} phút.`);

// 4. Lặp toàn bộ mảng sự kiện và in ra màn hình, đánh dấu đối với mỗi sự kiện trong trận đấu diễn ra trong hiệp 1 hay hiệp 2
for (const log of matchLogs) {
    const half = log[0] <= 45 ? 'FIRST HALF' : 'SECOND HALF';
    console.log(`[${half}] ${log[0]}: ⚽ ${log[1]}`);
}
