import { PageFooter } from "../components/footer/PageFooter";


export const NoPageLayout = (props:any) => {
    const { children } = props;

    return (
        <>
            {children}
            <PageFooter />
        </>
    );
};