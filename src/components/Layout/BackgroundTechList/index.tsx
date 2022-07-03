import { useRef } from 'react'
import { FixedSizeList as List } from 'react-window'
import StarFilledIcon from '~icons/StarFilledIcon'
import StarOutlineIcon from '~icons/StarOutlineIcon'
import { CONTENTFUL_BACKGROUND_PAGE } from '~types'
import clsx from '~utils/clsx'
import useLoadingElement from '~utils/useLoadingElement'
import useWindowWidth from '~utils/useWindowWidth'

export default function BackgroundTechList({
  tech
}: {
  tech: CONTENTFUL_BACKGROUND_PAGE['tech']
}) {
  const listRef = useRef<HTMLDivElement | null>(null)
  const isLoading = useLoadingElement(listRef)
  const width = useWindowWidth()

  return (
    <div data-testid="background-tech-wrapper" ref={listRef}>
      {!isLoading ? (
        <List
          height={256}
          itemSize={width < 640 ? 75 : 40}
          width="100%"
          itemData={tech.data}
          itemCount={tech.data.length}
        >
          {({ data, index, style }) => (
            <div
              style={style}
              data-testid={data[index].technology}
              key={data[index].technology}
            >
              <div className="font-plain text-xl leading-relaxed">
                <div
                  className={clsx(
                    'px-2.5 text-center sm:flex sm:items-center',
                    index % 2 ? 'bg-primary-900' : 'bg-transparent'
                  )}
                >
                  <p className="text-primary-25 sm:flex sm:flex-1">
                    {data[index].technology}
                  </p>
                  <p className="text-primary-25 sm:flex sm:flex-1 sm:justify-end">
                    {Array.from({ length: 5 }, (_, i) =>
                      i < data[index].level ? (
                        <StarFilledIcon
                          key={`${data[index].technology}-level-${i}`}
                          className="mr-2 align-middle text-xl text-primary-25"
                        />
                      ) : (
                        <StarOutlineIcon
                          key={`${data[index].technology}-not-level-${i}`}
                          className="mr-2 align-middle text-xl text-gray"
                        />
                      )
                    )}
                  </p>
                </div>
              </div>
            </div>
          )}
        </List>
      ) : (
        <div className="h-64 animate-pulse bg-primary-800" />
      )}
    </div>
  )
}
