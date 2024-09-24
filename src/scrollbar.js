console.log('Start');
export function addScrollbar() {
    var $ = document.getElementById.bind(document),
        container = $('scrollbar-container'),
        content = $('content'),
        scroll = $('scrollbar');

    content.addEventListener('scroll', function (e) {
        // scroll.style.height = container.clientHeight * content.clientHeight / content.scrollHeight + "px";
        console.log(content.scrollHeight)
        // scroll.style.top = (container.clientHeight * content.scrollTop / content.scrollHeight) + "px";
        scroll.style.top = content.scrollTop + 100 * (content.scrollTop / 241.778) + "px"
    });
    var event = new Event('scroll');

    window.addEventListener('resize', content.dispatchEvent.bind(content, event));
    content.dispatchEvent(event);

    scroll.addEventListener('mousedown', function (start) {
        start.preventDefault();
        var y = scroll.offsetTop;
        var onMove = function (end) {
            var delta = end.pageY - start.pageY;
            scroll.style.top = Math.min(container.clientHeight - scroll.clientHeight, Math.max(0, y + delta)) + 'px';
            content.scrollTop = (content.scrollHeight * scroll.offsetTop / container.clientHeight);
        };
        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', function () {
            document.removeEventListener('mousemove', onMove);
        });
    });
}
console.log('Done');
