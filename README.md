### redux

## Redux 동작 방식

`Action Creator > Action > dispatch > Reducer > State`

## Redux를 사용한 React의 렌더링 과정

1. component 내에 이벤트 호출(클릭, 입력 등)
   이벤트와 연결된 action creator 호출
2. action creator가 생성한 action 호출
3. action이 reducer로 전달(dispatch)
4. dispatch된 action의 영향으로 reducer의 state값이 변화
5. 렌더링

## Redux store design

1. Reducer Setup

- 변화를 일으키는 함수. 즉, 상태를 받아와서 새로운 상태로 반환하는 기능을 하는 함수에 대한 세팅.

2. 리턴 타입 명시

- 리듀서가 반환할 새로운 상태에 대한 명시.

3. Action 작성

4. Action Creators 추가

5. Request 로직 추가

6. Dispatch 적용
