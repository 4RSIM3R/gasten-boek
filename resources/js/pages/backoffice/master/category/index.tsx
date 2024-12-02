import { AppLayout } from "@/layouts/app-layout";

export default function CategoryIndex() {
    return (
        <div>
            <h1>Category</h1>
        </div>
    );
}

CategoryIndex.layout = (page: any) => <AppLayout children={page} />;