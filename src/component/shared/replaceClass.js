export const ReplaceClass = ({elementClass,oldClass, newClass ,replaceClass}) => {

    const element = document.querySelector(`.${elementClass}`);

    if (replaceClass) {

        if (element.classList.contains(oldClass)) {

            element.classList.add(newClass)
            element.classList.replace(oldClass , newClass)
    
        } else {
            element.classList.add(newClass)
        }

    } else {
        element.classList.add(newClass)
    }


    // my git code
    // if (filter_section.classList.contains("show_project_filter_section")) {

    //     filter_section.classList.add("hide_project_filter_section")
    //     filter_section.classList.replace("show_project_filter_section", "hide_project_filter_section")


    //     logo_move.classList.add("right_project_filter_icon")
    //     logo_move.classList.replace("left_project_filter_icon", "right_project_filter_icon")


    // } else {
    //     filter_section.classList.add("show_project_filter_section")
    //     filter_section.classList.replace("hide_project_filter_section", "show_project_filter_section")

    //     logo_move.classList.add("left_project_filter_icon")
    //     logo_move.classList.replace("right_project_filter_icon", "left_project_filter_icon")
    // }
}