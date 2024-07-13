import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Members } from "./components/members/Members";
import { Layout } from "./page/Layout";
import { NoPageLayout } from './page/NoPageLayout';
import { NotPage } from './components/notpage/NotPage';
import { Home } from './Home';


export default function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={
                        <Layout>
                            <Home />
                        </Layout>
                    } />
                    <Route path="/news" element={
                        <Layout>
                            <Members />
                        </Layout>
                    } />
                    <Route path="/member" element={
                        <Layout>
                            <Members />
                        </Layout>
                    } />
                    <Route path="/contact" element={
                        <Layout>
                            <Members />
                        </Layout>
                    } />
                    <Route path="/*" element={
                        <NoPageLayout>
                            <NotPage />
                        </NoPageLayout>
                    } />
                </Routes>
            </Router>
        </>
    )
};