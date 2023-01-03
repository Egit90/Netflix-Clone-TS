import React, {
    ImgHTMLAttributes,
    createContext,
    useContext,
    useState,
} from 'react'

import { Movie } from '../../hooks/useTmdb'

interface Props {
    children: React.ReactNode
    item?: {}
    cat?: string
    src?: string
}

interface Context {
    showFeature: boolean
    setShowFeature: React.Dispatch<React.SetStateAction<boolean>>
    itemFeature: Movie | {}
    setItemFeature: React.Dispatch<React.SetStateAction<{}>>
}

export const FeatureContext = createContext({} as Context)

const Card = ({ children }: Props) => {
    const [showFeature, setShowFeature] = useState(false)
    const [itemFeature, setItemFeature] = useState({})

    return (
        <FeatureContext.Provider
            value={{
                showFeature,
                setShowFeature,
                itemFeature,
                setItemFeature,
            }}>
            <Card.CardContainer>{children}</Card.CardContainer>
        </FeatureContext.Provider>
    )
}

//
Card.CardContainer = ({ children }: Props) => {
    return <div>{children}</div>
}

//
Card.Group = ({ children }: Props) => {
    return <div>{children}</div>
}

//
Card.Title = ({ children }: Props) => {
    return <h1 className="text-white">{children}</h1>
}

//
Card.SubTitle = ({ children }: Props) => {
    return <p>{children}</p>
}

//
Card.Text = ({ children }: Props) => {
    return <p>{children}</p>
}

//

Card.Entities = ({ children }: Props) => {
    return <div>{children}</div>
}

//
Card.Meta = ({ children }: Props) => {
    return <div>{children}</div>
}

//
Card.item = ({ item = {}, children }: Props) => {
    const { setShowFeature, setItemFeature } = useContext(FeatureContext)
    return (
        <div
            onClick={() => {
                setItemFeature(item)
                setShowFeature(true)
            }}>
            {children}
        </div>
    )
}

Card.Image = ({ ...Props }: ImgHTMLAttributes<HTMLImageElement>) => {
    return <img {...Props} />
}

Card.Feature = ({ children, cat, src }: Props) => {
    const { showFeature, setShowFeature, itemFeature } =
        useContext(FeatureContext)
    return showFeature ? (
        <div>
            <div>
                <h1>{(itemFeature as Movie).title}</h1>
                <p>{(itemFeature as Movie).overview}</p>
                <button onClick={() => setShowFeature(false)}>
                    <img src="/images/icons.close.png" alt="close" />
                </button>
            </div>
        </div>
    ) : null
}

export default Card
