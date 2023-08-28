import React from 'react'

import { Table as StyledTable, Thead, Tbody, Th, Tr, Td } from '../../../UI'

type TableProps<K extends PropertyKey, T extends Array<Record<K, string>>> = {
  thead: Readonly<Array<keyof T[0]>>
  tbody: T
}

export function Table<
  K extends PropertyKey,
  T extends Array<Record<K, string>>
>({ thead, tbody }: TableProps<K, T>): JSX.Element {
  return (
    <StyledTable>
      <Thead>
        <Tr>
          {thead?.map((th:any, i:number) => (
            <Th key={i}>
              <p>{th}</p>
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {tbody?.map((tr:any, i:number) => (
          <Tr key={i}>
            {thead?.map((th:any, j:number) => {
              return (
                <Td key={j}>
                  <p>{tr?.[th]}</p>
                </Td>
              )
            })}
          </Tr>
        ))}
      </Tbody>
    </StyledTable>
  )
}
