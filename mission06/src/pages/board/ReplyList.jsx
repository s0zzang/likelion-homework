import useCustomAxios from "@hooks/useCustomAxios.mjs";
import ReflyItem from "@pages/board/ReflyItem";
import ReplyNew from "@pages/board/ReplyNew";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ReplyList() {
  const axios = useCustomAxios();
  const { _id } = useParams();
  const [data, setData] = useState(null);

  const fetchList = async () => {
    const res = await axios.get(`posts/${_id}/replies`);
    setData(res.data);
  };

  useEffect(() => {
    fetchList();
  }, []);

  const list = data?.item.map((item) => (
    <ReflyItem key={item._id} item={item} />
  ));

  return (
    <section>
      <ReplyNew fetchList={fetchList} />
      <h4>댓글 {list?.length || 0}개</h4>
      {list}
    </section>
  );
}

export default ReplyList;
