import tw, { styled } from 'twin.macro'
import React from 'react'
import { Image } from 'src/api'

interface Props {
  images: Image[]
  onClickImage: (image: Image) => void
}
export const ImageList = ({ images, onClickImage }: Props) => {
  return (
    <React.Fragment>
      <ul tw="flex flex-wrap justify-around">
        {images.map((image) => (
          <li key={image.id} tw="p-5 cursor-pointer" onClick={() => onClickImage(image)}>
            <StyledImage src={`https://picsum.photos/id/${image.id}/300/300`} />
          </li>
        ))}
      </ul>
    </React.Fragment>
  )
}

const StyledImage = styled.img`
  ${tw`object-cover w-72 rounded-lg shadow-lg h-56 transform hover:scale-105 transition-all`}
`
