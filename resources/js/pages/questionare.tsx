import { Questionare } from "@/types/questionare"
import { useForm } from "@inertiajs/react"

type QuestionareProps = {
    question: Questionare[],
}

export default function QuestionareForm({ question }: QuestionareProps) {

    const { data, setData, errors, processing } = useForm();

    return (
        <div className="max-w-5xl mx-auto p-8" >
            <form action="">

            </form>
        </div>
    )

}