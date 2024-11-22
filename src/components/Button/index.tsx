
type Props = {
    text: string;
}

export default function Button({ text }: Props) {


    return (
        <div>
            <button type="submit" className="btn">{text}</button>
        </div>
    );
}