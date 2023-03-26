function Section({ title, children, className }) {
    return (
        <section className="border shadow rounded-lg p-4 py-3 bg-white">
            <div className={className || ''}>
                <h2 className="text-xl mb-2 font-medium">{title}</h2>
                <article className="flex flex-col gap-4">{children}</article>
            </div>
        </section>
    );
}

export default Section;
