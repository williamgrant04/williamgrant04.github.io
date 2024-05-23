import styled from "styled-components"
import StackImage from "./DataImage"
import data from "../data.json"

const DataTable = (props: { type: string }) => {
  return (
    <table>
      <tbody>
        {
          props.type === "stack" ?
            <>
              <Data>
                {data.stack.frontEnd.map(({href, src, type}) => {
                  return <StackImage href={href} src={src} type={type} key={type} />
                })}
              </Data>
              <Data>
                {data.stack.backEnd.map(({href, src, type}) => {
                  return <StackImage href={href} src={src} type={type} key={type} />
                })}
              </Data>
            </>
          :
            <Data>
              {data.tools.map(({href, src, type}) => {
                return <StackImage href={href} src={src} type={type} key={type} />
              })}
            </Data>
        }
      </tbody>
    </table>
  )
}

const Data = styled.tr`
  margin-bottom: 16px;
`

export default DataTable
