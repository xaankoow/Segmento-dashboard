export const ReplaceClass = ({ elementClass, oldClass, newClass, replaceClass }) => {

    const element = document.querySelector(`.${elementClass}`);

    if (element != undefined) {
        if (replaceClass) {

            if (element.classList.contains(oldClass)) {

                element.classList.add(newClass)
                element.classList.replace(oldClass, newClass)

            } else {
                element.classList.add(newClass)
            }

        } else {
            element.classList.add(newClass)
        }
    }

}