export const FindTicketPartText=(partIndex)=>{
    var part;

    switch (partIndex) {
        case 1:
            part="امور اداری"
            break;
        case 2:
            part="همکاری"
            break;
        case 3:
            part="امور مالی"
            break;
        case 6:
            part="امور فنی"
            break;
        case 7:
            part="سوالات پیش از خرید"
            break;
        case 8:
            part="پیشنهادات و انتقاد"
            break;
    
        default:
            break;
    }
    return part;
}

export const FindStatusTicket=(statusCode)=>{
    var statusPosition;

    switch (statusCode) {
        case 0:
            statusPosition="بسته"
            case 1:
            statusPosition="در انظار پاسخ"
            break;
            case 2:
            statusPosition="پاسخ داده شده"
            break;
    
        default:
            break;
    }

    return statusPosition;
}

export const TicketStatusColor=(statusCode)=>{
    var color;

    switch (statusCode) {
        case 0:
            color="sectionDisable"
            case 1:
            color="gold"
            break;
            case 2:
            color="success"
            break;
    
        default:
            break;
    }

    return color;
}