import { useNavigate } from 'react-router-dom';

export default function EmptyPage() {

    const navigate = useNavigate();

    return(
        <div>
            없거나 잘못된 페이지입니다<br />
            뒤로가기를 눌러주세요<br />
            <button onClick={() => {navigate(-1)}}>뒤로가기</button>
        </div>
    );
}