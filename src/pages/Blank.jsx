import React from  'react'
import './Blank.scss'




class MainPage extends React.Component {
    render(){
        return (
            <section className='info'>
                <div className='info__block'>
                    <div className='info__h'>Что такое Факторио?</div>
                    <div className='info__text'>Factorio — это игра, в которой вы строите фабрики и поддерживаете их работу. Вы будете добывать ресурсы, исследовать новые технологии, создавать инфраструктуру, автоматизировать производство и сражаться с врагами.На начальном этапе игры Вы будете вручную рубить деревья, добывать руду и создавать простые манипуляторы и транспортные конвейеры, но через некоторое время Вы, наконец, сможете подняться до энергетической индустрии с огромными солнечными фермами, перегонкой и переработкой нефти, построить роботов и развернуть логистическую сеть, настроенную для Ваших потребностей в ресурсах. Но жёсткая эксплуатация ресурсов планеты не останется без внимания местных жителей, так что вам придётся быть готовым постоять за себя и свою механическую империю.</div>
                    <div className='info__imgcontainer'>
                        <img className='info__imgcontainer__img' src="https://st.overclockers.ru/images/soft/2020/08/14/fact.jpg" alt="" srcset="" />
                        <img className='info__imgcontainer__img' src="https://3dnews.ru/assets/external/illustrations/2021/02/08/1032159/factorio_result.jpg" alt="" srcset="" />
                    </div>
                </div>

            
            
            </section>
        )
    }
}
export default MainPage;
