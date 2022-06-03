export const handleNextInput = (InputNum) => {
    const input_1 = document.querySelectorAll(".input_selector_1")
    const input_2 = document.querySelectorAll(".input_selector_2")
    const input_3 = document.querySelectorAll(".input_selector_3")
    const input_4 = document.querySelectorAll(".input_selector_4")
    switch (InputNum) {
        case 2:
            input_2.forEach(input => {
                input.focus();
                input.select();
            });
            break;
        case 3:
            input_3.forEach(input => {
                input.focus();
                input.select();
            });
            break;
        case 4:
            input_4.forEach(input => {
                input.focus();
                input.select();
            });
            break;
        case 0:
            input_4.forEach(input => {
                input.blur();
            });
            break;

        default:
            break;
    }
}