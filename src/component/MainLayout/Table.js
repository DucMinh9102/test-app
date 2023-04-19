import dataHOSE from '../../Data/dataHOSE.json';
import dataHNX from '../../Data/dataHNX.json';
import dataVN30 from '../../Data/dataVN30.json';
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import fixValue from '../../service/fixValue';
import '../../css/Table.css';
//chọn 20 mã đầu random dòng thay đổi => tổng cột dữ liệu là 15 cột => random số lượng cột thay đổi => random thứ tự cột thay đổi
//Data random
//khởi tạo các list muốn random
//chia list thành 2 mảng hoặc tách nhỏ trong 1 mảng với 2 type và price và volumn
//set màu theo className rồi thay đổi className mỗi khi data thay đổi sau đó clear lại className đó
// index => keyrows => list symbols
function rowDisplay(data) {
  const rowDisplay = data.slice(0, 20);
  const numRows = Math.floor(Math.random() * 5) + 1;
  const randomRows = [];
  for (let i = 0; i < numRows; i++) {
    const randomIndex = Math.floor(Math.random() * rowDisplay.length);
    randomRows.push(rowDisplay[randomIndex]);
  }
  console.log(randomRows);
  return randomRows;
}

function columnDisplay(bidPrice1, bidPrice2, bidPrice3, bidVol1, bidVol2, bidVol3, closePrice, closeVol, offerPrice1, offerPrice2, offerPrice3,
  offerVol1, offerVol2, offerVol3) {
  const columnDisplay = [
    { value: bidPrice1, type: 'price' },
    { value: bidPrice2, type: 'price' },
    { value: bidPrice3, type: 'price' },
    { value: offerPrice1, type: 'price' },
    { value: offerPrice2, type: 'price' },
    { value: offerPrice3, type: 'price' },
    { value: closePrice, type: 'price' },
    { value: closeVol, type: 'volume' },
    { value: bidVol1, type: 'volume' },
    { value: bidVol2, type: 'volume' },
    { value: bidVol3, type: 'volume' },
    { value: offerVol1, type: 'volume' },
    { value: offerVol2, type: 'volume' },
    { value: offerVol3, type: 'volume' }
  ];
  }

  function Table() {
    const [data, setData] = useState([]);
    const location = useLocation();

    useEffect(() => {
      if (location.pathname === "/hose") {
        setData(dataHOSE && dataHOSE.d);
      } else if (location.pathname === "/hnx") {
        setData(dataHNX && dataHNX.d);
      } else if (location.pathname === "/vn30") {
        setData(dataVN30 && dataVN30.d);
      } else {
        setData([]);
      }
      console.log(data);
    }, [data, location.pathname]);

    useEffect(() => {
      rowDisplay(data);
    }, [data]);

    return (
      <table>
        <thead>
          <tr>
            <th className="symbol" colSpan={1} rowSpan={2}>Symbol</th>
            <th className="reference" colSpan={1} rowSpan={2}>Ref</th>
            <th className="ceil" colSpan={1} rowSpan={2}>Ceil</th>
            <th className="floor" colSpan={1} rowSpan={2}>Floor</th>
            <th className="bid" colSpan={6} rowSpan={1}>Bid</th>
            <th className="matched" colSpan={3} rowSpan={1}>Matched</th>
            <th className="ask" colSpan={6} rowSpan={1}>Ask</th>
            <th className="t-vol" colSpan={1} rowSpan={2}>T-vol</th>
            <th className="prices" colSpan={3} rowSpan={1}>Prices</th>
            <th className="remain" colSpan={2} rowSpan={1}>Remain</th>
            <th className="foreign" colSpan={2} rowSpan={1}>Foreign</th>
          </tr>
          <tr>
            <th className="bid-price3" colSpan={1} rowSpan={1}>Prc 3</th>
            <th className="bid-vol3" colSpan={1} rowSpan={1}>Vol 3</th>
            <th className="bid-price2" colSpan={1} rowSpan={1}>Prc 2</th>
            <th className="bid-vol2" colSpan={1} rowSpan={1}>Vol 2</th>
            <th className="bid-price1" colSpan={1} rowSpan={1}>Prc 1</th>
            <th className="bid-vol1" colSpan={1} rowSpan={1}>Vol 1</th>
            <th className="mat-price" colSpan={1} rowSpan={1}>Price</th>
            <th className="mat-vol" colSpan={1} rowSpan={1}>Vol</th>
            <th className="mat-percent" colSpan={1} rowSpan={1}>%</th>
            <th className="ask-prc1" colSpan={1} rowSpan={1}>Prc 1</th>
            <th className="ask-vol1" colSpan={1} rowSpan={1}>Vol 1</th>
            <th className="ask-prc2" colSpan={1} rowSpan={1}>Prc 2</th>
            <th className="ask-vol2" colSpan={1} rowSpan={1}>Vol 2</th>
            <th className="ask-prc3" colSpan={1} rowSpan={1}>Prc 3</th>
            <th className="ask-vol3" colSpan={1} rowSpan={1}>Vol 3</th>
            <th className="prices-high" colSpan={1} rowSpan={1}>High</th>
            <th className="prices-avg" colSpan={1} rowSpan={1}>Avg</th>
            <th className="prices-low" colSpan={1} rowSpan={1}>Low</th>
            <th className="remain-bid" colSpan={1} rowSpan={1}>Bid</th>
            <th className="remain-ask" colSpan={1} rowSpan={1}>Ask</th>
            <th className="foreign-bought" colSpan={1} rowSpan={1}>Bought</th>
            <th className="foreign-sold" colSpan={1} rowSpan={1}>Sold</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) && data.map((row) => (
            <tr key={row.symbol}>
              <td className="symbol">{row.symbol}</td>
              <td className="reference">{fixValue(row.reference)}</td>
              <td className="ceil">{fixValue(row.ceiling)}</td>
              <td className="floor">{fixValue(row.floor)}</td>
              <td className="bid-price3">{fixValue(row.bidPrice3)}</td>
              <td className="bid-vol3">{fixValue(row.bidVol3)}</td>
              <td className="bid-price2">{fixValue(row.bidPrice2)}</td>
              <td className="bid-vol2">{fixValue(row.bidVol2)}</td>
              <td className="bid-price1">{fixValue(row.bidPrice1)}</td>
              <td className="bid-vol1">{fixValue(row.bidVol1)}</td>
              <td className="mat-price">{fixValue(row.closePrice)}</td>
              <td className="mat-vol">{fixValue(row.closeVol)}</td>
              <td className="mat-percent">{(row.changePercent).toFixed(2)}</td>
              <td className="ask-prc1">{fixValue(row.offerPrice1)}</td>
              <td className="ask-vol1">{fixValue(row.offerVol1)}</td>
              <td className="ask-prc2">{fixValue(row.offerPrice2)}</td>
              <td className="ask-vol2">{fixValue(row.offerVol2)}</td>
              <td className="ask-prc3">{fixValue(row.offerPrice3)}</td>
              <td className="ask-vol3">{fixValue(row.offerVol3)}</td>
              <td className="t-vol">{row.totalTrading}</td>
              <td className="prices-high">{fixValue(row.high)}</td>
              <td className="prices-avg">{fixValue(row.open)}</td>
              <td className="prices-low">{fixValue(row.low)}</td>
              <td className="remain-bid">{row.priceOne}</td>
              <td className="remain-ask">{row.priceTwo}</td>
              <td className="foreign-bought">{fixValue(row.foreignBuy)}</td>
              <td className="foreign-sold">{fixValue(row.foreignSell)}</td>
              {columnDisplay(row.bidPrice1, row.bidPrice2, row.bidPrice3, row.bidVol1, row.bidVol2, row.bidVol3, row.closePrice,
                row.closeVol, row.offerPrice1, row.offerPrice2, row.offerPrice3, row.offerVol1, row.offerVol2, row.offerVol3)}
            </tr>
          ))}
        </tbody>
      </table>
    )
  }

export default Table;