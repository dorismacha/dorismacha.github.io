import Layout from "@/components/Layout";
import { useLayoutEffect } from "react";

export default function CurriculumVitae() {

    useLayoutEffect(() => {
        document.title = "Curriculum Vitae | Doris Edmund Macha"
    }, [])

    return (
        <Layout>
            <></>
        </Layout>
    )
}
