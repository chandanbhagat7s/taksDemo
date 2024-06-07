
const express = require('express');

const app = express()
const PORT = 3000;

var pdf = require("pdf-creator-node");


app.use(express.json())

const generatePdf = (data) => {



    let htmlt;




    // let fields = JSON.parse(data)


    htmlt = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Invoice</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }

        .invoice-container {
            width: 210mm;
            margin: auto;
            padding: 20mm;
            border: 1px solid #000;
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 2px solid #000;
            padding-bottom: 10px;
        }

        .header img {
            width: 100px;
        }

        .invoice-title {
            font-size: 18px;
            font-weight: bold;
        }

        .details,
        .address {
            display: flex;
            justify-content: space-between;
            margin-top: 10px;
        }

        .details div,
        .address>div {
            width: 500px;
        }

        .table {
            width: 800px;
            border-collapse: collapse;
            margin-top: 20px;
        }

        .table th,
        .table td {
            border: 1px solid #000;
            padding: 8px;
            text-align: left;
        }

        .table th {
            background-color: #f2f2f2;
        }

        .total,
        .amount-words {
            text-align: right;
            margin-top: 10px;
        }

        .footer {
            margin-top: 20px;
            border-top: 2px solid #000;
            padding-top: 10px;
            text-align: left;
        }

        .footer p {
            margin: 5px 0;
        }

        .TableContainer {
            width: 800px;
            font-size: 14px;
        }
        .fontbold {
        font-weight : 700;
        }
    </style>
</head>

<body>
    <div class="invoice-container">
        <div class="header">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon Logo">
            <div class="invoice-title">Tax Invoice/Bill of Supply/Cash Memo</div>
        </div>

        <table class="TableContainer" cellSpacing="10px">
            <tr>
                <td>

                    <h3>Sold By : </h3><br>
                    {{this.data.soldBy}}<br>

                </td>
                <td>
                <h3>Billing Address : </h3><br>
                     {{this.data.billingAddress}}<br>
                    <span>State/UT Code</span>: {{this.data.billingAddresscode}}
                </td>
            </tr>

            <tr>
                <td align="start">

                    <h3>PAN No:  </h3> {{this.data.panNo}}<br>
                    <h3>GST Registration No: </h3>  {{this.data.gstRegisterationNo}}



                </td>
                <td>
                    <div>
                        <div class="">
                            <h3>Shipping Address:</h3>
                            {{this.data.shippingAddress}}<br>
                            <span>State/UT Code</span>: {{this.data.shipingAddressCode}}
                        </div>
                        <div class="">
                            <span class="fontbold">Order Number:</span>{{this.data.orderNumber}} <br>
                            <span class="fontbold">Order Date:</span> {{this.data.shipingAddressCode}}<br>
                            <span class="fontbold">Place of Supply:</span> {{this.data.supplyPlace}}<br>
                            <span class="fontbold">Place of Delivery:</span> {{this.data.deliveryPlace}}<br>
                            <span class="fontbold">Invoice Number:</span> {{this.data.invoiceNumber}}<br>
                            <span class="fontbold">Invoice Detail:</span>{{this.data.invoiceDetails}}<br>
                            <span class="fontbold">Invoice Date:</span>{{this.data.invoiceDate}}
                        </div>
                    </div>
                </td>
            </tr>

        </table>

        <table border>
        <thead>
            <tr>
                <th>Sl. No</th>
                <th>Description</th>
                <th>Unit Price</th>
                <th>Qty</th>
                <th>Net Amount</th>
                <th>Tax Rate</th>
                <th>Tax Type</th>
                <th>Tax Amount</th>
                <th>Total Amount</th>
            </tr>
        </thead>
        <tbody>
        {{#each this.tableData}}
            <tr>
                <td rowSpan="4">{{this.id}}</td>
                <td>
                     {{this.Description}}
                </td>
                <td>₹{{this.unitPrice}}</td>
                <td>{{this.quantity}}</td>
                <td>₹{{this.netAmount}}</td>
                <td>{{this.fcgst}}%</td>
                <td>CGST</td>
                <td>₹{{this.ftaxcgstAmout}}</td>
                <td rowSpan="2">₹{{this.ftotalAmount}}</td> 
               
            </tr>
            <tr>
                <td className="no-border"></td>
                <td></td>
                <td></td>
                <td></td>
                <td>{{this.fsgst}}%</td>
                <td>SGST</td>
                <td>₹{{this.ftaxsgstAmout}}</td>
                </tr>
                <tr>
                <td className="no-border">Shipping Charges</td>
                <td>₹{{this.unitTax}}</td>
                <td></td>
                <td>₹{{this.netTax}}</td>
                <td>{{this.scgst}}%</td>
                <td>CGST</td>
                <td>₹{{this.staxcgstAmout}}</td>
                <td rowSpan="2">₹{{this.stotalAmount}}</td> 
            </tr>
            <tr>
                <td className="no-border"></td>
                <td></td>
                <td></td>
                <td></td>
                <td>{{this.ssgst}}%</td>
                <td>SGST</td>
                <td>₹{{this.staxsgstAmout}}</td>
            </tr>

            {{/each}}

            <tr className="total-row">
                <td colSpan="8"  >TOTAL:</td>
                <td>₹{{this.total}}</td>
            </tr>
        </tbody>
        </table>

        <div class="amount-words">
            <strong>Amount in Words:{{this.inwords}}</strong>  
        </div>

        <div class="footer">
            <p>Whether tax is payable under reverse charge - No</p>
            <p>For Varasiddhi Silk Exports:</p>
            <p><strong>Authorized Signatory</strong></p>
            <p>ASRPL-Amazon Seller Services Pvt. Ltd. ARIPL-Amazon Retail India Pvt. Ltd. jointly where Amazon Retail
                India Pvt. Ltd. fulfillment center is co-located</p>
            <p>Customers desirous of availing input GST credit are requested to create a Business account and purchase
                on Amazon.in/business from Business eligible offers</p>
            <p>Please note that this invoice is not a demand for payment</p>
        </div>
    </div>
</body>

</html>`;
    let height = "11in";
    let width = '8in';


    //   base64Data = Buffer.from(data).toString('base64')

    //   base64Data = 'data:image/jpeg;base64,' + base64Data


    //   htmlt = htmlt.replace('<logoImage>', base64Data);
    var options = {
        format: "A4",
        // orientation: "vartical",
        height,
        width,
        border: "",
        header: {
            height: "2mm",

        },
        footer: {
            height: "1mm",
            contents: {

            }
        }
    };

    var document = {
        html: htmlt,
        data: {
            tableData: [...data.tableData],
            ...data,
        },
        path: `./Public/files/output.pdf`,
        type: "",
    };


    pdf
        .create(document, options)
        .then((res) => {
            console.log(res);
            // res.status(200).send({
            //   status: true,
            //   data: insertedFurther
            // })
        })
        .catch((error) => {
            // res.status(200).send({
            //   status: true,
            //   data: insertedFurther
            // })

            console.error(error);
        });




}





app.post('/api/v1/invoice/createInvoice', (req, res) => {
    const data = req.body;
    console.log(data);

    generatePdf(data)

    res.status(200).send({
        status: "success",
        msg: "pdf created successfully"
    })


})

app.listen(PORT, () => {
    console.log("server started at port 3000");
})














