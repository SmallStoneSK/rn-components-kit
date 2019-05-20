var map = (arrayLike, fn) => {
  if(arrayLike && arrayLike.length > 0) {
    const ret = [];
    for(let i = 0, len = arrayLike.length; i < len; i++) {
      ret.push(fn(arrayLike[i]));
    }
    return ret;
  }
}

/**
 * 阿里巴巴图标矢量库上找的Ant Design官方图标库
 * https://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.de12df413&cid=9402
 * 
 * 打开上述地址，控制台运行下面代码，可以扒下所有图标的type和path数据
 */
function downloadIconsData() {
  var data = {};
  var list = document.querySelectorAll('.block-icon-list li');
  map(list, element => {
    const paths = map(element.querySelectorAll('svg path'), e => e.getAttribute('d'));
    const type = element.querySelector('.icon-name span').innerHTML.trim().split(/\s/).join('-').toLowerCase();
    data[type] = paths;
  });
  console.log(JSON.stringify(data, null, 2));
}

/**
 * 将所有的icon生成一个可预览的表格
 */
function generatePreviewTable() {

  const colCnt = 8; // 一行8个
  const Icons = require('../publish/Icons.json');
  const makeTable = content => `<table id="table" style="font-size: 12px;background-color: #FFF;">${content}</table>`;
  const makeRow = content => `<tr>${content}</tr>`;
  const makeCell = content => `<td align="center" style="width: 12.5%;height: 100px;vertical-align: center;">${content}</td>`;
  const makeTitle = title => `<p align="center" style="margin: 5px auto 0">${title}</p>`;
  const makeSVG = paths => (
    `<svg style="width: 32px; height: 32px;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">` + 
      paths.map(path => `<path d="${path}"></path>`).join('') + 
    `</svg>`
  );

  let cnt = 0, rows = [], str = '';
  Object.keys(Icons).forEach(iconType => {
    const cell = makeCell(makeSVG(Icons[iconType]) + makeTitle(iconType));
    str += cell;
    cnt++;
    if(cnt === colCnt) {
      rows.push(makeRow(str));
      cnt = 0;
      str = '';
    }
  });
  const table = makeTable(rows.join(''));
  console.log(table);
}