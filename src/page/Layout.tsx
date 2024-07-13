import { PageFooter } from "../components/footer/PageFooter";
import { PageHeader } from "../components/header/PageHeader";


export const Layout = (props:any) => {
    const { children } = props;

    return (
        <>
            <PageHeader />
                {children}
            <PageFooter />
        </>
    );
};