import styled from "styled-components";

export function VideoThumbnail() {
  return (
    <div style={{ width: "312px" }}>
      <ThumbnailImage src="https://picsum.photos/200/120" />
      <ThumbnailInnerBox>
        <ThumbnailAvatar src="https://kanto.legiaodosherois.com.br/w250-h250-gnw-cfill-q95-gcc/wp-content/uploads/2021/07/legiao_Ry1hNJoxOzpY.jpg.webp" />
        <TextBox>
          <ThumbnailTitleLink href="https://google.com">
            Como ser igual ao Luccas Neto
          </ThumbnailTitleLink>
          <ThumbnailChannelLink href="https://facebook.com">
            Luccas Neto
          </ThumbnailChannelLink>
          <ThumbnailInfo>37 mi de visualizações há * 6 anos</ThumbnailInfo>
        </TextBox>
      </ThumbnailInnerBox>
    </div>
  );
}

const ThumbnailInnerBox = styled.div`
  display: flex;
  gap: 8px;
`;

const TextBox = styled.div`
  display: flex;
  gap: 2px;
  flex-direction: column;
`;

const ThumbnailImage = styled.img`
  width: 100%;
  border-radius: 4px;
`;

const ThumbnailAvatar = styled.img`
  border-radius: 50%;
  width: 32px;
  height: 32px;
`;

const ThumbnailTitleLink = styled.a`
  text-transform: uppercase;
  font-size: 0.9em;
`;

const ThumbnailChannelLink = styled.a`
  font-size: 0.9em;
`;

const ThumbnailInfo = styled.a`
  font-size: 0.9em;
`;
