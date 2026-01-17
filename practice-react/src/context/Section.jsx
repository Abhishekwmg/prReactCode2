import { LevelContext } from "./LevelContext"

export default function Section({ level, children }) {
    return <section>
        <LevelContext value={level}>
            {children}
        </LevelContext>
    </section>
}