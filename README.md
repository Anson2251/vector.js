# vector.js
使用 `JavaScript` 完成向量的基本运算

---

**注意：该项目正处于测试阶段，不建议应用在生产环境**

---

## 代办事项
- 扩展功能

---

## 文档

- `class vector` 向量对象

    - ### 构造函数
    
        | 参数 | 类型 | 说明 |
        |:---:|:---:|:---:|
        | `degree` | `number \| point` | 角度 或 矢量终点 |
        | `length` | `number` | 向量长度,默认为 `0`，若 `degree` 为向量终点，则不需填写，通过计算得出角度和长度 |

    - ### 属性

        | 属性 | 类型 | 说明 |
        |:---:|:---:|:---:|
        | `degree` | `number` | 角度 (**以 `X` 轴正方向为 `0` 度，逆时针方向为正方向**，即 `Y` 轴正方向为 `90` 度)|
        | `length` | `number` | 向量长度 |
    
    - ### 方法 
    
        | 方法 | 返回值类型 | 说明 |
        |:---:|:---:|:---:|
        | `getComponentX()` | `vector` | 获取向量在 `X` 轴方向上的分向量 |
        | `getComponentY()` | `vector` | 获取向量在 `Y` 轴方向上的分向量 |
        | `getEndPoint()` | `point` | 获取向量终点 |
        | `getOpposite()` | `vector` | 获取相反向量 |
        | `clone()` | `vector` | 复制向量 |
		
- `namespace vector` 向量

	- ### 成员
	
		| 成员 | 说明 |
        |:---:|:---:|
		| `var accuracy: number` | 精确度 |
		| `function round(num: number): number` | 使用 `vector.accuracy` 提供的精度进行四舍五入 |
		| `function getHypotenuse(lenX: number, lenY: number): number` | 使用勾股定理求解直角三角形斜边长  (`@param lenX` 直角边长 `@param lenY` 直角边长) |
		| `function toDeg(rad: number): number` | 弧度转角度 |
		| `function toRad(deg: number): number` | 角度转弧度 |
		| `function add(vector1: vector, vector2: vector): vector` | 向量相加 |
		| `function sub(vector1: vector, vector2: vector): vector` | 向量相减 |

- `class point` 点

	- ### 构造函数
	
		| 参数 | 类型 | 说明 |
        |:---:|:---:|:---:|
        | `x` | `number` | `X` 坐标 |
		| `y` | `number` | `Y` 坐标 |
		
最后编辑于 *2023年1月27日*
		
