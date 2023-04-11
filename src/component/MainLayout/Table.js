import dataHOSE from '../../Data/dataHOSE.json';
import dataHNX from '../../Data/dataHNX.json';
import dataVN30 from '../../Data/dataVN30.json';
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import '../../css/Table.css';
//chọn 20 mã đầu random dòng thay đổi => tổng cột dữ liệu là 15 cột => random số lượng cột thay đổi => random thứ tự cột thay đổi
//Data random

function Table() {
  const [data, setData] = useState([]);
  const [highlight, setHighlight] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {

      const randomRows = [];
      let countRow = 0;
      while (countRow < Math.floor(Math.random() * 7 ) + 1) {
        const randomRow = Math.floor(Math.random() * 20);
        if (!randomRows.includes(randomRow)) {
          randomRows.push(randomRow);
          countRow++;
        }
      }
      setHighlight(randomRows);
      setTimeout(() => {
        setHighlight([]);
      }, 2000);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
        {Array.isArray(data) && data.map((row, index) => (
          <tr key={row.symbol} style={{
            backgroundColor: highlight.includes(index) ? "green" : "",}}>
            <td className="symbol">{row.symbol}</td>
            <td className="reference">{(row.reference / 1000).toFixed(2)}</td>
            <td className="ceil">{(row.ceiling / 1000).toFixed(2)}</td>
            <td className="floor">{(row.floor / 1000).toFixed(2)}</td>
            <td className="bid-price3">{(row.bidPrice3 / 1000).toFixed(2)}</td>
            <td className="bid-vol3">{(row.bidVol3 / 1000).toFixed(2)}</td>
            <td className="bid-price2">{(row.bidPrice2 / 1000).toFixed(2)}</td>
            <td className="bid-vol2">{(row.bidVol2 / 1000).toFixed(2)}</td>
            <td className="bid-price1">{(row.bidPrice1 / 1000).toFixed(2)}</td>
            <td className="bid-vol1">{(row.bidVol1 / 1000).toFixed(2)}</td>
            <td className="mat-price">{(row.closePrice / 1000).toFixed(2)}</td>
            <td className="mat-vol">{(row.closeVol / 1000).toFixed(2)}</td>
            <td className="mat-percent">{(row.changePercent).toFixed(2)}</td>
            <td className="ask-prc1">{(row.offerPrice1 / 1000).toFixed(2)}</td>
            <td className="ask-vol1">{(row.offerVol1 / 1000).toFixed(2)}</td>
            <td className="ask-prc2">{(row.offerPrice2 / 1000).toFixed(2)}</td>
            <td className="ask-vol2">{(row.offerVol2 / 1000).toFixed(2)}</td>
            <td className="ask-prc3">{(row.offerPrice3 / 1000).toFixed(2)}</td>
            <td className="ask-vol3">{(row.offerVol3 / 1000).toFixed(2)}</td>
            <td className="t-vol">{row.totalTrading}</td>
            <td className="prices-high">{(row.high / 1000).toFixed(2)}</td>
            <td className="prices-avg">{(row.open / 1000).toFixed(2)}</td>
            <td className="prices-low">{(row.low / 1000).toFixed(2)}</td>
            <td className="remain-bid">{row.priceOne}</td>
            <td className="remain-ask">{row.priceTwo}</td>
            <td className="foreign-bought">{(row.foreignBuy / 1000).toFixed(2)}</td>
            <td className="foreign-sold">{(row.foreignSell / 1000).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table;