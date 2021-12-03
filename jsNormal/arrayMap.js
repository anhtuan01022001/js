/* array map
    map() được sử dụng khi bạn muốn làm thay đổi giá trị của các phần tử trong mảng theo một logic nào đó.
    Logic được thể hiện dưới dạng một callback, giá trị trả về của callback sẽ là giá trị mới cho phần tử mảng tương ứng.
    syntax: array.map(function(currentValue, index, arr), thisValue)
*/

let rectangles = [
    {width : 10 , height : 5},
    {width : 10 , height : 20},
    {width : 4 , height : 16}
  ];
  console.log('S la:');
  let dtRectangles = rectangles.map(function(x)
    {
      console.log(x.width * x.height);
    });