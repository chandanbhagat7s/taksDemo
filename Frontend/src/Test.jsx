import React from "react";

const Invoice = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 border rounded shadow-lg">
      <div className="flex justify-between items-center">
        <img
          src="https://via.placeholder.com/150x50"
          alt="Amazon Logo"
          className="h-12"
        />
        <div className="text-right">
          <h1 className="text-xl font-bold">
            Tax Invoice/Bill of Supply/Cash Memo
          </h1>
          <p>(Original for Recipient)</p>
        </div>
      </div>

      <div className="mt-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h2 className="font-semibold">Sold By:</h2>
            <p>Varasiddhi Silk Exports</p>
            <p>75, 3rd Cross, Lalbagh Road</p>
            <p>BENGALURU, KARNATAKA, 560027</p>
            <p>IN</p>
          </div>
          <div>
            <h2 className="font-semibold">Billing Address:</h2>
            <p>Madhu B</p>
            <p>
              Eurofins IT Solutions India Pvt Ltd., 1st Floor, Maruti Platinum,
              Lakshminarayana Pura, AECS
            </p>
            <p>Layou</p>
            <p>BENGALURU, KARNATAKA, 560037</p>
            <p>IN</p>
            <p>State/UT Code: 29</p>
          </div>
          <div>
            <p>PAN No: AACFV3325K</p>
            <p>GST Registration No: 29AACFV3325K1ZY</p>
          </div>

          <div>
            <h2 className="font-semibold">Shipping Address:</h2>
            <p>Madhu B</p>
            <p>
              Eurofins IT Solutions India Pvt Ltd., 1st Floor, Maruti Platinum,
              Lakshminarayana Pura, AECS
            </p>
            <p>Layou</p>
            <p>BENGALURU, KARNATAKA, 560037</p>
            <p>IN</p>
            <p>State/UT Code: 29</p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <p>Order Number: 403-3225714-7676307</p>
            <p>Order Date: 28.10.2019</p>
          </div>
          <div>
            <p>Invoice Number: IN-761</p>
            <p>Invoice Details: KA-310565025-1920</p>
            <p>Invoice Date: 28.10.2019</p>
          </div>
        </div>
      </div>

      <table className="min-w-full mt-4 border border-1 border-gray-300">
        <thead>
          <tr>
            <th className="py-2 text-left">Sl. No</th>
            <th className="py-2 text-left">Description</th>
            <th className="py-2 text-left">Unit Price</th>
            <th className="py-2 text-left">Qty</th>
            <th className="py-2 text-left">Net Amount</th>
            <th className="py-2 text-left">Tax Rate</th>
            <th className="py-2 text-left">Tax Type</th>
            <th className="py-2 text-left">Tax Amount</th>
            <th className="py-2 text-left">Total Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2">1</td>
            <td className="py-2">
              Varasiddhi Silks Men's Formal Shirt (SH-05-42, Navy Blue, 42)
            </td>
            <td className="py-2">₹538.10</td>
            <td className="py-2">1</td>
            <td className="py-2">₹538.10</td>
            <td className="py-2">2.5%</td>
            <td className="py-2">CGST</td>
            <td className="py-2">₹13.45</td>
            <td className="py-2">₹565.00</td>
          </tr>
          <tr>
            <td className="py-2">2</td>
            <td className="py-2">Shipping Charges</td>
            <td className="py-2">₹30.96</td>
            <td className="py-2">1</td>
            <td className="py-2">₹30.96</td>
            <td className="py-2">2.5%</td>
            <td className="py-2">CGST</td>
            <td className="py-2">₹0.77</td>
            <td className="py-2">₹32.50</td>
          </tr>
          <tr>
            <td className="py-2">3</td>
            <td className="py-2">
              Varasiddhi Silks Men's Formal Shirt (SH-05-40, Navy Blue, 40)
            </td>
            <td className="py-2">₹538.10</td>
            <td className="py-2">1</td>
            <td className="py-2">₹538.10</td>
            <td className="py-2">2.5%</td>
            <td className="py-2">CGST</td>
            <td className="py-2">₹13.45</td>
            <td className="py-2">₹565.00</td>
          </tr>
          <tr>
            <td className="py-2">4</td>
            <td className="py-2">Shipping Charges</td>
            <td className="py-2">₹30.96</td>
            <td className="py-2">1</td>
            <td className="py-2">₹30.96</td>
            <td className="py-2">2.5%</td>
            <td className="py-2">CGST</td>
            <td className="py-2">₹0.77</td>
            <td className="py-2">₹32.50</td>
          </tr>
          <tr>
            <td colSpan="8" className="text-right font-bold py-2">
              TOTAL:
            </td>
            <td className="py-2 font-bold">₹1195.00</td>
          </tr>
        </tbody>
      </table>

      <div className="mt-4">
        <p>
          Amount in Words:{" "}
          <span className="font-bold">
            One Thousand One Hundred And Ninety-five only
          </span>
        </p>
        <p>Whether tax is payable under reverse charge - No</p>
        <div className="mt-4 flex justify-between items-center">
          <div>
            <p>For Varasiddhi Silk Exports:</p>
            <div className="mt-8">
              <p>Authorized Signatory</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
