
const express = require('express');

const app = express()
const PORT = 3000;

var pdf = require("pdf-creator-node");

const generatePdf = (data) => {



    let htmlt;




    let fields = JSON.parse(data)


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
    </style>
</head>

<body>
    <div class="invoice-container">
        <div class="header">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon Logo">
            <div class="invoice-title">Tax Invoice/Bill of Supply/Cash Memo</div>
        </div>

        <div class="details">
            <div>
                <strong>Sold By:</strong><br>
                Varasiddhi Silk Exports<br>
                75, 3rd Cross, Lalbagh Road<br>
                BENGALURU, KARNATAKA, 560027<br>
                IN<br>

            </div>
            <div>
                <strong>Billing Address:</strong><br>
                Madhu B<br>
                Eurofins IT Solutions India Pvt Ltd., 1st Floor,<br>
                Maruti Platinum, Lakshminarayana Pura, AECS Layout<br>
                BENGALURU, KARNATAKA, 560037<br>
                IN<br>
                State/UT Code: 29
            </div>
        </div>

        <div class="address">
            <div>
                PAN No: AACFV3325K<br>
                GST Registration No: 29AACFV3325K1ZY
            </div>

            <div>
                <div class="w-100">
                    <strong>Shipping Address:</strong>
                    Madhu B<br>
                    Eurofins IT Solutions India Pvt Ltd., 1st Floor,<br>
                    Maruti Platinum, Lakshminarayana Pura, AECS Layout<br>
                    BENGALURU, KARNATAKA, 560037<br>
                    IN
                </div>
                <div class="w-100">
                    <span>Order Number:</span> 403-3225714-7676307<br>
                    <span>Order Date:</span> 28.10.2019<br>
                    <span>Place of Supply:</span> KARNATAKA<br>
                    <span>Place of Delivery:</span> KARNATAKA<br>
                    <span>Invoice Number:</span> IN-761<br>
                    <span>Invoice Date:</span> 28.10.2019
                </div>
            </div>

        </div>

        <table class="table">
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
                <tr>
                    <td>1</td>
                    <td>Varasiddhi Silks Men's Formal Shirt (SH-05-42, Navy Blue, 42)<br>B07KGF3KW8 ( SH-05-42 )</td>
                    <td>₹338.10</td>
                    <td>1</td>
                    <td>₹338.10</td>
                    <td>2.5%</td>
                    <td>CGST</td>
                    <td>₹8.45</td>
                    <td>₹365.00</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Shipping Charges</td>
                    <td>₹30.96</td>
                    <td>1</td>
                    <td>₹30.96</td>
                    <td>2.5%</td>
                    <td>CGST</td>
                    <td>₹0.77</td>
                    <td>₹32.50</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Varasiddhi Silks Men's Formal Shirt (SH-05-40, Navy Blue, 40)<br>B07KGCS2X7 ( SH-05-40 )</td>
                    <td>₹338.10</td>
                    <td>1</td>
                    <td>₹338.10</td>
                    <td>2.5%</td>
                    <td>CGST</td>
                    <td>₹8.45</td>
                    <td>₹365.00</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Shipping Charges</td>
                    <td>₹30.96</td>
                    <td>1</td>
                    <td>₹30.96</td>
                    <td>2.5%</td>
                    <td>CGST</td>
                    <td>₹0.77</td>
                    <td>₹32.50</td>
                </tr>
                <tr>
                    <td colspan="8" class="total">Total:</td>
                    <td>₹1,195.00</td>
                </tr>
            </tbody>
        </table>

        <div class="amount-words">
            <strong>Amount in Words:</strong> One Thousand One Hundred And Ninety-five only
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
    let height = "8in";
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
            height: "3mm",
            contents: {

            }
        }
    };

    var document = {
        html: htmlt,
        data: {
            // fields
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




});


};



app.post('/createInvoice', (req, res) => {

    generatePdf()

    res.status(200).send({
        status: "success",
        msg: "pdf created successfully"
    })


})

app.listen(PORT, () => {
    console.log("server started at port 3000");
})














