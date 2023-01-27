/**矢量 */
class vector {
    /**角度，以右为0度 */
    degree: number;

    /**长度 */
    length: number;

    type: string = "vector";

    /**
     * @param degree 角度 或 矢量终点
     * @param length 长度默认为 `0`，若为 `degree` 终点，则不需填写，通过计算得出角度和长度
     */
    constructor(degree: number | point, length?: number) {
        if (typeof (degree) === "object") {
            var lenX: number = degree.x;
            var lenY: number = degree.y;

            this.length = vector.round(vector.getHypotenuse(lenX, lenY));
            this.degree = (this.length !== 0) ? vector.round(vector.toDeg(Math.acos(lenX / this.length))) % 360 : 0;
            if (lenY < 0) this.degree = 360 - this.degree;
        } else {
            this.degree = vector.round(degree) % 360;
            this.length = Math.abs(vector.round(length || 0));
        }
    }

    /**获取在 `X` 轴方向上的分向量 */
    getComponentX(): vector {
        var len = (Math.abs(this.degree) != 90) ? vector.round((this.length * Math.cos(vector.toRad(this.degree)))) : 0;
        return new vector((len < 0) ? 180 : 0, len);
    };

    /**获取在 `Y` 轴方向上的分向量 */
    getComponentY(): vector{
		var len = (Math.abs(this.degree) != 180) ? vector.round((this.length * Math.sin(vector.toRad(this.degree)))) : 0;
		return new vector((len < 0) ? 270 : 90, len);
	};

    /**
     * 获取终点
     * @returns {point} 终点
     */
    getEndPoint(): point{
        var comX = this.getComponentX();
        var comY = this.getComponentY();
		return new point((comX.degree < 90 || comX.degree > 270) ? comX.length : 0 - comX.length, (comY.degree < 180) ? comY.length : 0 - comY.length);
	}

    /**获取相反向量 */
    getOpposite(): vector{		
		var endPoint: point = this.getEndPoint();
		return new vector(new point(0 - endPoint.x, 0 - endPoint.y));
	}

    /**复制向量 */
    clone(){
        return new vector(this.getEndPoint());
    }
}

namespace vector {
    /**四舍五入精度 */
    export var accuracy: number = 6;

    /**
     * 使用 `vector.accuracy` 提供的精度进行四舍五入
     * @param num 数字
     * @returns 
     */
    export function round(num: number){
        var acy = Math.pow(10, vector.accuracy);
        return Math.round(num * acy) / acy;
    }

    /**
     * 使用勾股定理求解直角三角形斜边长
     * @param lenX 直角边长
     * @param lenY 直角边长
     * @returns 斜边长
     */
    export function getHypotenuse(lenX: number, lenY: number): number {
        return Math.sqrt((lenX * lenX) + (lenY * lenY));
    }

    /**
     * 弧度转角度
     * @param rad 弧度
     * @returns 角度
     */
    export function toDeg(rad: number): number{
        return (rad * 180 / Math.PI);
    }

    /**
     * 角度转弧度
     * @param deg 角度
     * @returns 弧度
     */
    export function toRad(deg: number): number{
        return (deg * Math.PI / 180);
    }

    /**
     * 向量相加
     * @param vct1 向量 1
     * @param vct2 向量 2
     * @returns 和向量
     */
    export function add(vct1: vector, vct2: vector): vector{
        if(vct1.type !== "vector" || vct2.type !== "vector") {
            return new vector(0, 0);
        }

        if(Math.abs(vct1.degree - vct2.degree) == 180) return new vector(0, 0); // 如果互为相反向量，则返回零向量

        var m1 = vct1.getEndPoint(); // 使用向量产生的点的位移合成新向量的终点
        var m2 = vct2.getEndPoint();  
        var lenX = m1.x + m2.x;
        var lenY = m1.y + m2.y;
                
        return new vector(new point(lenX, lenY));
    }

    /**
     * 向量相减
     * @param vct1 向量 1
     * @param vct2 向量 2
     * @returns 差向量
     */
    export function sub(vct1: vector, vct2: vector): vector{
        return add(vct1, vct2.getOpposite());
    }
}


/**点 */
class point{
    /**横坐标 */
    x: number;

    /**纵坐标 */
    y: number;

    /**
     * @param x 横坐标
     * @param y 纵坐标
     */
    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }
}