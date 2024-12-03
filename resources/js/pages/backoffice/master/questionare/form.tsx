import { Button, Textarea } from "@/components/ui";
import { AppLayout } from "@/layouts/app-layout";
import { showError } from "@/lib/error";
import { Questionare } from "@/types/questionare";
import { useForm } from "@inertiajs/react";

type QuestionareFormProps = {
    questionare?: Questionare;
};

export default function QuestionareForm({ questionare }: QuestionareFormProps) {

    const { data, setData, post, put, errors, processing } = useForm<Questionare>({
        question: questionare?.question,
    } satisfies Questionare)

    const onSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();

        if (questionare) {
            put(route('backoffice.master.questions.update', { id: questionare?.id }), {
                onSuccess: (_) => { },
                onError: (error) => showError(error),
            });
        } else {
            post(route('backoffice.master.questions.store'), {
                onSuccess: (_) => { },
                onError: (error) => showError(error),
            });
        }

    }

    return (
        <div>
            <div className="flex flex-row justify-between" >
                <div className="" >
                    <h1 className="text-xl font-semibold" >Kuisioner</h1>
                    <p className="text-sm text-gray-500" >Form kuisioner</p>
                </div>
            </div>
            <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 mt-4">
                <Textarea
                    label="Kuisioner"
                    name="question"
                    placeholder="Kuisioner"
                    value={data.question}
                    onChange={(value) => setData('question', value)}
                    errorMessage={errors.question}
                    className="col-span-12"
                />
                <div className="col-span-12" >
                    <Button type="submit" isDisabled={processing} >
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
}

QuestionareForm.layout = (page: any) => <AppLayout children={page} />;