import React from "react";
import '../../css/Table.css';

function Table() {
    return (
        <table>
            <colgroup>
            <col className="symbol" />
            <col className="ref" />
            <col className="ceil"/>
            <col className="floor"/>
            <col className="bid"/>
            <col className="matched"/>
            <col className="ask"/>
            <col className="t-vol"/>
            <col className="prices"/>
            <col className="remain"/>
            <col className="foreign"/>
            </colgroup>
            <thead>
            <tr>
                <th className="symbol" colSpan={1} rowSpan={2}>Symbol</th>
                <th className="ref" colSpan={1} rowSpan={2}>Ref</th>
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
        </table>
    )
}

export default Table;