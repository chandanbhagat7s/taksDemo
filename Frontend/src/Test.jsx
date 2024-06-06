import React, { useState } from "react";

const Invoice = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-4xl mx-auto p-4 border rounded shadow-lg">
      <div className="flex justify-between items-center">
        <div>
          <p>click to select image for logo &darr;</p>
          <label htmlFor="logo" className="">
            <img
              src="https://via.placeholder.com/150x50"
              alt="Amazon Logo"
              className="h-12 hover:scale-105 hover:bg-black hover:cursor-pointer"
            />
          </label>
          <input type="file" id="logo" hidden />
        </div>
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
            <textarea
              type="text"
              cols={30}
              rows={5}
              className="p-2 focus:outline-none focus:border-1 focus:border focus:border-gray-300"
              placeholder={` Varasiddhi Silk Exports \n 75, 3rd Cross, Lalbagh Road \n BENGALURU, KARNATAKA, 560027 \n IN `}
            />
          </div>
          <div>
            <h2 className="font-semibold">Billing Address:</h2>

            <textarea
              type="text"
              cols={40}
              rows={7}
              className="p-2 focus:outline-none focus:border-1 focus:border focus:border-gray-300 "
              placeholder={`Madhu B  \n  Eurofins IT Solutions India Pvt Ltd., 1st Floor, Maruti Platinum,\n  Lakshminarayana Pura, AECS Layou \n BENGALURU, KARNATAKA, 560037 \nIN \n  `}
            />
            <div>
              <span className="font-semibold">State/UT Code</span>
              <input
                type="number"
                className="p-2 focus:outline-none focus:border-1 focus:border focus:border-gray-300"
                placeholder="29"
              />
            </div>
          </div>
          <div>
            <div>
              <span className="font-semibold">PAN No: </span>
              <input
                type="text"
                className="p-2 focus:outline-none focus:border-1 focus:border focus:border-gray-300"
                placeholder="AACFV3325K"
              />
            </div>
            <div>
              <span className="font-semibold">GST Registration No: </span>
              <input
                type="text"
                className="p-2 focus:outline-none focus:border-1 focus:border focus:border-gray-300"
                placeholder="29AACFV3325K1ZY"
              />
            </div>
          </div>

          <div>
            <h2 className="font-semibold">Shipping Address:</h2>
            <textarea
              type="text"
              cols={40}
              rows={7}
              className="p-2 focus:outline-none focus:border-1 focus:border focus:border-gray-300 "
              placeholder={`Madhu B  \n  Eurofins IT Solutions India Pvt Ltd., 1st Floor, Maruti Platinum,\n  Lakshminarayana Pura, AECS Layou \n BENGALURU, KARNATAKA, 560037 \nIN \n  `}
            />
            <div>
              <span className="font-semibold">State/UT Code</span>
              <input
                type="number"
                className="p-2 focus:outline-none focus:border-1 focus:border focus:border-gray-300"
                placeholder="29"
              />
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <p>
              Order Number:{" "}
              <input
                type="text"
                className="p-2 focus:outline-none focus:border-1 focus:border focus:border-gray-300"
                placeholder=" 403-3225714-7676307"
              />
            </p>
            <p>
              Order Date:{" "}
              <input
                type="date"
                className="p-2 focus:outline-none focus:border-1 focus:border focus:border-gray-300"
                placeholder="29"
              />
            </p>
          </div>
          <div>
            <p>
              Place of Supply:{" "}
              <input
                type="text"
                className="p-2 focus:outline-none focus:border-1 focus:border focus:border-gray-300"
                placeholder="KARNATAKA"
              />
            </p>
            <p>
              Place of Delivery:{" "}
              <input
                type="text"
                className="p-2 focus:outline-none focus:border-1 focus:border focus:border-gray-300"
                placeholder="KARNATAKA"
              />
            </p>
            <p>
              Invoice Number:{" "}
              <input
                type="text"
                className="p-2 focus:outline-none focus:border-1 focus:border focus:border-gray-300"
                placeholder=" IN-761 "
              />
            </p>
            <p>
              Invoice Details:{" "}
              <input
                type="text"
                className="p-2 focus:outline-none focus:border-1 focus:border focus:border-gray-300"
                placeholder="KA-310565025-1920"
              />
            </p>
            <p>
              Invoice Date:{" "}
              <input
                type="date"
                className="p-2 focus:outline-none focus:border-1 focus:border focus:border-gray-300"
              />
            </p>
          </div>
        </div>
      </div>

      <table className="table">
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
          {!count && (
            <tr>
              <td colSpan="9">
                <div className="flex justify-around my-20">
                  <div>Please enter how many details you have</div>
                  <input
                    type="number"
                    placeholder="how many orders you have"
                    className="p-2 focus:outline-none focus:border-1 focus:border focus:border-gray-300"
                    onChange={(e) => {
                      console.log(e.target.value);
                      setCount(Number(e.target.value));
                    }}
                  />
                </div>
              </td>
            </tr>
          )}
          {console.log(count)}
          {count &&
            Array(count)
              .fill(" ")
              .map((el, i) => {
                console.log(el);
                return (
                  <React.Fragment key={i}>
                    <tr>
                      <td>1</td>
                      <td>
                        Varasiddhi Silks Men's Formal Shirt (SH-05-42, Navy
                        Blue, 42)B07KGF3KW8 ( SH-05-42 )
                      </td>
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
                    <tr></tr>
                  </React.Fragment>
                );
              })}

          {/* <tr>
            <td colSpan="8" className="">
              Total:
            </td>
            <td>₹1,195.00</td>
          </tr> */}
        </tbody>
      </table>

      <div className="amount-words">
        <strong>Amount in Words:</strong> One Thousand One Hundred And
        Ninety-five only
      </div>

      <p>Whether tax is payable under reverse charge - No</p>
      <div className="mt-4 flex justify-between items-center">
        <div>
          <p>For Varasiddhi Silk Exports:</p>
          <div className="mt-8">
            <p>Authorized Signatory</p>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Invoice;
