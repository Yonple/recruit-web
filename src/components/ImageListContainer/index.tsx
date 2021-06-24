import tw, { styled } from 'twin.macro'
import React from 'react'
import { Image } from 'src/api'
import { Modal } from '../Modal'
import { ImageList } from '../ImageList'
import { useState } from 'react'

interface Props {
  images?: Image[]
}
export const ImageListContainer = ({ images }: Props) => {
  const [selectedImage, setSelectedImage] = useState<Image>()

  if (!images) return null

  return (
    <React.Fragment>
      <ImageList images={images} onClickImage={(image) => setSelectedImage(image)} />
      <Modal visible={!!selectedImage} onClose={() => setSelectedImage(undefined)}>
        {selectedImage && (
          <StyledImage src={`https://picsum.photos/id/${selectedImage.id}/300/300`} />
        )}
      </Modal>
    </React.Fragment>
  )
}

const StyledImage = styled.img`
  ${tw`w-full`}
`
