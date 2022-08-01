import React, { Fragment } from "react";
import ReactExport from "react-export-excel";

export const exportExcel = ({ excelDatad }) => {
    const ExcelFile = ReactExport.ExcelFile;
    const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
    const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

    const excelData = excelDatad

    const dataSet1 = [
        {
            name: "Johson",
            amount: 30000,
            sex: 'M',
            is_married: true
        },
        {
            name: "Monika",
            amount: 355000,
            sex: 'F',
            is_married: false
        },
        {
            name: "John",
            amount: 250000,
            sex: 'M',
            is_married: false
        },
        {
            name: "Josef",
            amount: 450500,
            sex: 'M',
            is_married: true
        }
    ];
    
    var dataSet2 = [
        {
            name: "Johnson",
            total: 25,
            remainig: 16
        },
        {
            name: "Josef",
            total: 25,
            remainig: 7
        }
    ];
    return (
        <Fragment>
                <ExcelFile element={<button>Download file</button>}>
                    <ExcelSheet data={excelData} name="Employees">
                        <ExcelColumn label="شماره فاکتور" value={excelData.order_code} />
                        <ExcelColumn label="نوع اشتراک" value={excelData.item.description} />
                        <ExcelColumn label="تاریخ خرید" value={excelData.created_at} />
                        <ExcelColumn label="تاریخ انقضا" value={excelData.updated_at} />
                        <ExcelColumn label="مبلغ" value={excelData.sub_total} />
                        <ExcelColumn label="وضعیت پرداخت" value={excelData.payment_status_text} />
                        <ExcelColumn label="عملیات" value={excelData.type_text} />
                    </ExcelSheet>
                </ExcelFile>
                <ExcelFile element={<button>Download Data</button>}>
                <ExcelSheet data={dataSet1} name="Employees">
                    <ExcelColumn label="Name" value="name"/>
                    <ExcelColumn label="Wallet Money" value="amount"/>
                    <ExcelColumn label="Gender" value="sex"/>
                    <ExcelColumn label="Marital Status"
                                 value={(col) => col.is_married ? "Married" : "Single"}/>
                </ExcelSheet>
                <ExcelSheet data={dataSet2} name="Leaves">
                    <ExcelColumn label="Name" value="name"/>
                    <ExcelColumn label="Total Leaves" value="total"/>
                    <ExcelColumn label="Remaining Leaves" value="remaining"/>
                </ExcelSheet>
            </ExcelFile>
        </Fragment>

    );
}