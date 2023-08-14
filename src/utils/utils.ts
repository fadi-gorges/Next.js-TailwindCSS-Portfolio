export const scrollIntoView = (id: string, offset: number) => {
    const e = document.getElementById(id)
    const y = e!.offsetTop + offset

    window.scrollTo({top: y, behavior: "smooth"})

    const elem = document.activeElement;
    if (elem instanceof HTMLElement) {
        elem.blur();
    }
}