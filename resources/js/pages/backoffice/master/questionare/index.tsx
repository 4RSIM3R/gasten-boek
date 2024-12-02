import { AppLayout } from "@/layouts/app-layout";

type QuestionareIndexProps = {
    response: any;
};

export default function QuestionareIndex() {
    return (
        <div>
            <h1>Questionare</h1>
        </div>
    );
}

QuestionareIndex.layout = (page: any) => <AppLayout children={page} />;