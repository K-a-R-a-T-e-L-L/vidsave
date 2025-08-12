export type SliderProps = {
    props: {
        title: string
        arrayURL: string[][],
        settings: Record<string, number | string | boolean>,
        styles: {
            container: Record<string, string>,
            title: Record<string, string>,
            buttons: boolean,
            imgSizes: 'contain' | 'cover',
            class: string
        }
    }
};
