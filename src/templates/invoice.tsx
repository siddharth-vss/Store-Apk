import { Interface } from "../utils";

interface Template {
    Items: Interface.Item[] | null;
    InvoiceItems: string[];
    data : {
        email: string,
        items: string[],
        quantity: number[],
        total: number,
        status: string,
        mode: string,
        shop: string,
        _id: string,
        createdAt: string,
        updatedAt : string,
        __v: number
      }
    InvoiceQuantity: number[];
}
const invoice = ({ Items, InvoiceItems, InvoiceQuantity,data }: Template) => {
    const X = new Date();
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let month = months[X.getMonth()];
    let day = X.getDate();
    let year = X.getFullYear();
    console.log(X);


    const itemfinder = (e: string) => Items?.filter((f: Interface.Item) => f._id == e);
    let Total = 0;

    const Header = `<html>

<head>
    <meta charset="UTF-8">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
        rel="stylesheet">
    <style>
        body {
            font-family: Nunito, sans-serif;
            color: #555;
        }

        .invoice-box {
            max-width: 800px;
            margin: auto;
            padding: 30px;
            border: 1px solid #eee;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
            font-size: 16px;
            line-height: 24px;

            font-family: 'Helvetica', Nunito, sans-serif;
            color: #555;
        }

        .invoice-box table {
            width: 100%;
            line-height: inherit;
            text-align: left;
        }

        .invoice-box table td {
            padding: 5px;
            vertical-align: top;
        }

        .invoice-box table tr td:nth-child(2) {
            text-align: right;
        }

        .invoice-box table tr.top table td {
            padding-bottom: 20px;
        }

        .invoice-box table tr.top table td.title {
            font-size: 45px;
            line-height: 45px;
            color: #333;
        }

        .invoice-box table tr.information table td {
            padding-bottom: 40px;
        }

        .invoice-box table tr.heading td {
            background: #666;
            color: #fff;
            align-items: center;
            border-bottom: 1px solid #ddd;
            font-weight: bold;
        }

        .invoice-box table tr.item td {
            border-bottom: 1px solid #eee;
        }

        .invoice-box table tr.item.last td {
            border-bottom: none;
        }

        .row {
            display: flex;
            justify-content: space-between;
        }

        .font {
            font-family: Nunito, sans-serif;
        }

        .invoice-box table tr.total td:nth-child(2) {
            border-top: 2px solid #eee;
            font-weight: bold;
        }

        .notes {
            margin-top: 20px;
        }

        .invoice-sp {
            font-family: Nunito, sans-serif;
            font-size: 50px;
        }

        .wsp {
            width: 38px;
        }
    </style>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="invoice-box">
        <table cellpadding="0" cellspacing="0">
            <tr class="top">
                <td colspan="2">
                    <table>
                        <tr>
                            <td class="title">
                                <img src="https://res.cloudinary.com/dabh5hsuk/image/upload/v1698753157/sp.jpg"
                                    style="width:100px; max-width:100px;">
                            </td>
                            <td>
                                <h1 class="invoice-sp">INVOICE</h1>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr class="information">
                <td colspan="2">
                    <table>
                        <tr>
                            <td>
                                <h1 class="invoice-sp" style="font-size: 20px;margin-bottom: 0;">Your Company</h1>
                                <!-- <br> -->
                                1234 Main St<br>
                                City, State ZIP
                            </td>
                            <td>

                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr class="information">
                <td colspan="2">
                    <table>
                        <tr>
                            <td>
                                <h1 class="invoice-sp" style="font-size: 20px;margin-bottom: 0;">Bill To :</h1>
                                Client's Name<br>
                                Client's Address<br>
                                City, State ZIP
                            </td>
                            <td style="display: flex;">


                                <div style="width : 50%"></div>
                                <div style="width : 50%">
                                    <div class="row">
                                        <span class="invoice-sp" style="font-size: 20px; font-weight: 700;">
                                            Invoice:
                                        </span>${data._id}
                                        <!-- <br> -->
                                    </div>
                                    <div class="row">
                                        <span class="invoice-sp" style="font-size: 20px; font-weight: 700;">
                                            Invoice Date
                                        </span> ${month} ${day}, ${year}
                                        <!-- <br> -->
                                    </div>
                                    <div class="row">
                                        <span class="invoice-sp" style="font-size: 20px; font-weight: 700;">
                                            Due Date
                                        </span> ${month} ${day -1 }, ${year}
                                    </div>
                                </div>

                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr class="heading">
                <td>
                    <div class="row font" style="justify-content: space-around;">
                        <div>Item Description</div>
                        <div>Qty</div>
                    </div>
                </td>
                <td>
                    <div class="row font" style="justify-content: space-around;">
                        <div>Rate</div>
                        <div>Amount</div>
                    </div>
                </td>
            </tr>
            `;

    const Table = InvoiceItems.map((e: string,index : number) => {
        const item = itemfinder(e);
        if (item) {
            Total += item[0].price * InvoiceQuantity[index];
            return`
             <tr class="item">
                <td>
                    <div class="row font" style="justify-content: space-around;">
                        <div>${item[0].name.length > 30 ? item[0].name.slice(0, 22)+"..." :item[0].name }</div>
                        <div>${InvoiceQuantity[index]}</div>
                    </div>
                </td>
                <td>
                    <div class="row font" style="justify-content: space-around;">
                        <div>${item[0].price}</div>
                        <div>₹${item[0].price * InvoiceQuantity[index]}</div>
                    </div>
                </td>
            </tr>
            `
        }
        return ` <tr class="item">
                <td>
                    <div class="row font" style="justify-content: space-around;">
                        <div>Brochure Design</div>
                        <div>2</div>
                    </div>
                </td>
                <td>
                    <div class="row font" style="justify-content: space-around;">
                        <div>100</div>
                        <div>₹200</div>
                    </div>
                </td>
            </tr>
            `
    })

    const Footer = `<tr class="total">
                <td></td>
                <td>
                    <div class="row font" style="justify-content: space-around;">
                        <div class="wsp">Subtotal</div>
                        <div class="wsp">₹${Total}</div>
                    </div>
                </td>
            </tr>
            <tr class="total">
                <td></td>
                <td>
                    <div class="row font" style="justify-content: space-around;">
                        <div class="wsp">Sales Tax (10%)</div>
                        <div class="wsp">₹${Total / 10}</div>
                    </div>
                </td>
            </tr>
            <tr class="total">
                <td></td>
                <td>
                    <div class="row font" style="justify-content: space-around;">
                        <div class="wsp">Total</div>
                        <div class="wsp">₹${Total + (Total / 10)}</div>
                    </div>
                </td>
            </tr>
        </table>
        <br>
        <div class="notes">
            <h3>Notes:</h3>
            <p>It was great doing business with you.</p>
            <h3>Terms & Conditions:</h3>
            <p>Please make the payment by the due date.</p>
        </div>
    </div>
</body>

</html>
            `;

    return (Header + Table + Footer)
}

export default invoice