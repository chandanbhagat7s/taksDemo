import axios from "axios";
import React, { useState } from "react";

const Invoice = () => {
  const [count, setCount] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [total, setTotal] = useState(0);

  const [data, setData] = useState({});

  function handleDataChange(e) {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });

    console.log(data);
  }

  async function handlePdfCreationTask() {
    try {
      const res = await axios.post("/api/v1/invoice/createInvoice", {
        data,
        tableData,
        total,
      });
      console.log(res);
    } catch (error) {
      console.log("error is ", error);
    }
  }
  let rest = [];
  const handlechange = (e, id) => {
    let obj = tableData.filter((el) => {
      if (el.id !== id) {
        rest.push(el);
      }
      return el.id == id;
    });
    const { name, value } = e.target;

    let newObj = {
      ...obj[0],
      [name]: value,
    };
    console.log(newObj);

    let calculated = {
      netAmount: Number(newObj.unitPrice) * Number(newObj.quantity) || 0,
      netTax: Number(newObj.unitTax) * Number(newObj.quantity) || 0,

      ftaxcgstAmout:
        Number(newObj.unitPrice) *
          Number(newObj.quantity) *
          (newObj.fcgst / 100) || 0,
      ftaxsgstAmout:
        Number(newObj.unitPrice) *
          Number(newObj.quantity) *
          (newObj.fsgst / 100) || 0,
      staxcgstAmout:
        Number(newObj.unitTax) *
          Number(newObj.quantity) *
          (newObj.scgst / 100) || 0,
      staxsgstAmout:
        Number(newObj.unitTax) *
          Number(newObj.quantity) *
          (newObj.ssgst / 100) || 0,
      ftotalAmount:
        Number(newObj.unitPrice) *
          Number(newObj.quantity) *
          (newObj.fsgst / 100) +
        Number(newObj.unitPrice) *
          Number(newObj.quantity) *
          (newObj.fcgst / 100) +
        Number(newObj.unitPrice) * Number(newObj.quantity),
      stotalAmount:
        Number(newObj.unitTax) *
          Number(newObj.quantity) *
          (newObj.scgst / 100) +
        Number(newObj.unitTax) *
          Number(newObj.quantity) *
          (newObj.ssgst / 100) +
        Number(newObj.unitTax) * Number(newObj.quantity),
    };

    newObj = { ...newObj, ...calculated };
    console.log("calculated", calculated, newObj);
    const sortedObject = [...rest, newObj].sort((a, b) => a.id - b.id);
    let totalcount = 0;
    [...rest, newObj].map((el) => {
      totalcount = totalcount + el.ftotalAmount + el.stotalAmount;
    });
    setTotal(totalcount);
    setTableData([...sortedObject]);
    console.log(tableData);
  };

  return (
    <div className="max-w-5xl mx-auto p-4 border rounded shadow-lg">
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
              name="soldBy"
              onChange={handleDataChange}
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
              name="billingAddress"
              onChange={handleDataChange}
              className="p-2 focus:outline-none focus:border-1 focus:border focus:border-gray-300 "
              placeholder={`Madhu B  \n  Eurofins IT Solutions India Pvt Ltd., 1st Floor, Maruti Platinum,\n  Lakshminarayana Pura, AECS Layou \n BENGALURU, KARNATAKA, 560037 \nIN \n  `}
            />
            <div>
              <span className="font-semibold">State/UT Code</span>
              <input
                name="billingAddresscode"
                onChange={handleDataChange}
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
                name="panNo"
                onChange={handleDataChange}
                type="text"
                className="p-2 focus:outline-none focus:border-1 focus:border focus:border-gray-300"
                placeholder="AACFV3325K"
              />
            </div>
            <div>
              <span className="font-semibold">GST Registration No: </span>
              <input
                name="gstRegisterationNo"
                onChange={handleDataChange}
                type="text"
                className="p-2 focus:outline-none focus:border-1 focus:border focus:border-gray-300"
                placeholder="29AACFV3325K1ZY"
              />
            </div>
          </div>

          <div>
            <h2 className="font-semibold">Shipping Address:</h2>
            <textarea
              name="shippingAddress"
              onChange={handleDataChange}
              type="text"
              cols={40}
              rows={7}
              className="p-2 focus:outline-none focus:border-1 focus:border focus:border-gray-300 "
              placeholder={`Madhu B  \n  Eurofins IT Solutions India Pvt Ltd., 1st Floor, Maruti Platinum,\n  Lakshminarayana Pura, AECS Layou \n BENGALURU, KARNATAKA, 560037 \nIN \n  `}
            />
            <div>
              <span className="font-semibold">State/UT Code</span>
              <input
                name="shipingAddressCode"
                onChange={handleDataChange}
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
                name="orderNumber"
                onChange={handleDataChange}
                type="text"
                className="p-2 focus:outline-none focus:border-1 focus:border focus:border-gray-300"
                placeholder=" 403-3225714-7676307"
              />
            </p>
            <p>
              Order Date:{" "}
              <input
                name="orderDate"
                onChange={handleDataChange}
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
                name="supplyPlace"
                onChange={handleDataChange}
                type="text"
                className="p-2 focus:outline-none focus:border-1 focus:border focus:border-gray-300"
                placeholder="KARNATAKA"
              />
            </p>
            <p>
              Place of Delivery:{" "}
              <input
                name="deliveryPlace"
                onChange={handleDataChange}
                type="text"
                className="p-2 focus:outline-none focus:border-1 focus:border focus:border-gray-300"
                placeholder="KARNATAKA"
              />
            </p>
            <p>
              Invoice Number:{" "}
              <input
                name="invoiceNumber"
                onChange={handleDataChange}
                type="text"
                className="p-2 focus:outline-none focus:border-1 focus:border focus:border-gray-300"
                placeholder=" IN-761 "
              />
            </p>
            <p>
              Invoice Details:{" "}
              <input
                name="invoiceDetails"
                onChange={handleDataChange}
                type="text"
                className="p-2 focus:outline-none focus:border-1 focus:border focus:border-gray-300"
                placeholder="KA-310565025-1920"
              />
            </p>
            <p>
              Invoice Date:{" "}
              <input
                name="invoiceDate"
                onChange={handleDataChange}
                type="date"
                className="p-2 focus:outline-none focus:border-1 focus:border focus:border-gray-300"
              />
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-scroll">
        <table
          cellPadding={"1"}
          cellSpacing={"4"}
          className="table-auto border-collapse border border-gray-400"
        >
          <thead className="bg-gray-200">
            <tr>
              <th>Sl. No</th>
              <th>Description</th>
              <th>Unit Price</th>
              <th>Qty</th>
              <th>Net Amount</th>
              <th>Tax Rate type and amount</th>
              <th>Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {!count && (
              <tr>
                <td colSpan="9">
                  <div className="flex justify-around my-20 ">
                    <div>Please enter how many details you have</div>
                    <input
                      type="number"
                      placeholder="how many orders you have"
                      className="p-2 focus:outline-none focus:border-1 focus:border focus:border-gray-300"
                      onChange={(e) => {
                        console.log(e.target.value);
                        setCount(Number(e.target.value));
                        let listObj = [];
                        Array(Number(e.target.value))
                          .fill("")
                          .map((el, i) => {
                            listObj.push({
                              id: i + 1,
                              quantity: 0,

                              Description: "",
                              unitPrice: 0,
                              fcgst: 0,
                              fsgst: 0,

                              unitTax: 0,

                              scgst: 0,
                              ssgst: 0,
                            });
                          });
                        setTableData([...listObj]);
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
                  return (
                    <React.Fragment key={i}>
                      <tr>
                        <td>{i + 1}</td>
                        <td>
                          <textarea
                            cols={40}
                            rows={3}
                            type="text"
                            name="Description"
                            onChange={(e) => {
                              handlechange(e, i + 1);
                            }}
                            className="p-2  border-1 border-black border rounded mx-3"
                            placeholder={`Varasiddhi Silks Men's Formal Shirt (SH-05-42, Navy  Blue, 42) \n B07KGF3KW8 ( SH-05-42 )`}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="p-2  border-1 border-black border rounded mx-3"
                            placeholder="Rs. 238 "
                            name="unitPrice"
                            onChange={(e) => {
                              handlechange(e, i + 1);
                            }}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="p-2  border-1 border-black border rounded mx-3"
                            placeholder="1"
                            name="quantity"
                            onChange={(e) => {
                              handlechange(e, i + 1);
                            }}
                          />
                        </td>
                        <td>₹{tableData[i].netAmount || 0}</td>
                        <td>
                          <tr>
                            <td>
                              <input
                                type="number"
                                className="p-2  border-1 border-black border rounded mx-3"
                                placeholder="2.5% "
                                name="fcgst"
                                onChange={(e) => {
                                  handlechange(e, i + 1);
                                }}
                              />
                            </td>
                            <td>&nbsp;&nbsp; CGST &nbsp;&nbsp;</td>
                            <td>
                              &nbsp;&nbsp; ₹{tableData[i].ftaxcgstAmout}{" "}
                              &nbsp;&nbsp;
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input
                                type="number"
                                className="p-2  border-1 border-black border rounded mx-3"
                                placeholder="2.5% "
                                name="fsgst"
                                onChange={(e) => {
                                  handlechange(e, i + 1);
                                }}
                              />
                            </td>
                            <td>&nbsp;&nbsp; SGST &nbsp;&nbsp;</td>
                            <td>
                              &nbsp;&nbsp; ₹{tableData[i].ftaxsgstAmout}{" "}
                              &nbsp;&nbsp;
                            </td>
                          </tr>
                        </td>
                        <td>
                          &nbsp;&nbsp; ₹{tableData[i].ftotalAmount} &nbsp;&nbsp;
                        </td>
                      </tr>

                      <tr>
                        <td>{i + 1}</td>
                        <td>Shipping Charges</td>
                        <td>
                          <input
                            type="number"
                            className="p-2  border-1 border-black border rounded mx-3"
                            placeholder="Rs. 50 "
                            name="unitTax"
                            onChange={(e) => {
                              handlechange(e, i + 1);
                            }}
                          />
                        </td>
                        <td></td>
                        <td>₹{tableData[i].netTax || 0}</td>
                        <td>
                          <tr>
                            <td>
                              <input
                                type="number"
                                className="p-2  border-1 border-black border rounded mx-3"
                                placeholder="2.5% "
                                name="scgst"
                                onChange={(e) => {
                                  handlechange(e, i + 1);
                                }}
                              />
                            </td>
                            <td>&nbsp;&nbsp; CGST &nbsp;&nbsp;</td>
                            <td>
                              &nbsp;&nbsp; ₹{tableData[i].staxcgstAmout}{" "}
                              &nbsp;&nbsp;
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input
                                type="number"
                                className="p-2  border-1 border-black border rounded mx-3"
                                placeholder="2.5% "
                                name="ssgst"
                                onChange={(e) => {
                                  handlechange(e, i + 1);
                                }}
                              />
                            </td>
                            <td>&nbsp;&nbsp; SGST &nbsp;&nbsp;</td>
                            <td>
                              &nbsp;&nbsp; ₹{tableData[i].staxsgstAmout}{" "}
                              &nbsp;&nbsp;
                            </td>
                          </tr>
                        </td>
                        <td>
                          &nbsp;&nbsp; ₹{tableData[i].stotalAmount} &nbsp;&nbsp;
                        </td>
                      </tr>
                    </React.Fragment>
                  );
                })}

            <tr>
              <td colSpan="8" className="">
                Total:
              </td>
              <td>{total || 0}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="amount-words">
        <strong>Amount in Words:</strong> One Thousand One Hundred And
        Ninety-five only
      </div>

      <p>Whether tax is payable under reverse charge - No</p>
      <div className="mt-4 flex justify-between items-end">
        <div>
          <p>For Varasiddhi Silk Exports:</p>

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
          </div>
          <div className="mt-8">
            <p>Authorized Signatory</p>
          </div>
        </div>
      </div>

      <div className="px-10">
        <button onClick={handlePdfCreationTask}>Go to Pdf</button>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Invoice;
