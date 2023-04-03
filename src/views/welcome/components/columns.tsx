import TypeIt from "@/components/ReTypeit";
import OfficeBuilding from "@iconify-icons/ep/office-building";
import Tickets from "@iconify-icons/ep/tickets";
import Location from "@iconify-icons/ep/location";
import Iphone from "@iconify-icons/ep/iphone";
import Notebook from "@iconify-icons/ep/notebook";
import User from "@iconify-icons/ri/user-3-fill";

export function useColumns() {
  const lists = [
    { type: "", label: "摸鱼" },
    { type: "success", label: "摆烂" },
    { type: "info", label: "不学无术" },
    { type: "danger", label: "旅游" },
    { type: "warning", label: "阅读" }
  ];

  const columnsA = [
    {
      labelRenderer: () => (
        <div class="flex items-center">
          <el-icon>
            <iconify-icon-offline icon={User} />
          </el-icon>
          用户名
        </div>
      ),
      value: "不学无术的Chris"
    },
    {
      labelRenderer: () => (
        <div class="flex items-center">
          <el-icon>
            <iconify-icon-offline icon={Iphone} />
          </el-icon>
          手机号
        </div>
      ),
      value: "176****2803"
    },
    {
      labelRenderer: () => (
        <div class="flex items-center">
          <el-icon>
            <iconify-icon-offline icon={Location} />
          </el-icon>
          居住地
        </div>
      ),
      value: "中国"
    }
  ];

  const columnsB = [
    {
      labelRenderer: () => (
        <div class="flex items-center">
          <el-icon>
            <iconify-icon-offline icon={Tickets} />
          </el-icon>
          标签
        </div>
      ),
      cellRenderer: () => {
        return lists.map(tag => {
          return (
            <el-tag
              class="mr-[10px]"
              type={tag.type}
              size="small"
              effect="dark"
            >
              {tag.label}
            </el-tag>
          );
        });
      }
    },
    {
      labelRenderer: () => (
        <div class="flex items-center">
          <el-icon>
            <iconify-icon-offline icon={OfficeBuilding} />
          </el-icon>
          联系地址
        </div>
      ),
      value: "永恒大陆-绚丽之门"
    }
  ];

  const columnsC = [
    {
      labelRenderer: () => (
        <div class="flex items-center">
          <el-icon>
            <iconify-icon-offline icon={Notebook} />
          </el-icon>
          个性签名
        </div>
      ),
      cellRenderer: () => (
        <TypeIt
          className={"github"}
          values={["代码太累了，不如玩游戏！"]}
          cursor={false}
          speed={100}
        />
      )
    }
  ];

  return {
    columnsA,
    columnsB,
    columnsC
  };
}
