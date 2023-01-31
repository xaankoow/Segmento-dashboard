import React, { Fragment } from 'react'
import HappyReactionImg from '../../../../assets/img/dashboard/support/messageBox/footer/mood_happy.svg'
import badReactionImg from '../../../../assets/img/dashboard/support/messageBox/footer/mood_bad.svg'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { messageRateServise } from '../../../service/ticket'

export default function MessageFooter({ type, attachment , messageUuid , messageRate}) {

  const [moodSelected, setMoodSelected] = useState("")
  
  const loadingState = useSelector((state) => state.loadingState);

  const dispatch = useDispatch();

  const Rate={
    happy:1,
    bad:2,
    setRate:async function(moodSelected) {
        //handle show loadin
        {
          loadingState.ProcessingDelay.push("messageRateServise");
          loadingState.canRequest = false;
          await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState });
        }
        try {
    
          let formdata = new FormData();
          formdata.append("uuid", messageUuid);
          formdata.append("rate", moodSelected);

          const { data } = await messageRateServise(formdata);
          if (data.code == 200 & data.status == true) {
            setMoodSelected(data.data.rate)
            // console.log('data', data)

          }
        } catch (error) {
          // console.log(error)
        }
        //handle hide loading
        {
          var removeProcessingItem = loadingState.ProcessingDelay.filter(
            (item) => item != "messageRateServise"
          );
          loadingState.ProcessingDelay = removeProcessingItem;
          loadingState.canRequest = removeProcessingItem > 0 ? false : true;
          await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState });
        }
    },
    checkRate:(localRate,apiRate)=>{
      if (localRate!="") {
        return localRate
      }else{
        return apiRate
      }
    }
  }


  return (
    <div className=' border-t border-silver h-12 mx-4'>
      <div className={`${type == "admin" ? "float-left" : "float-right"} h-full`}>
        <div className='flex justify-between items-center ml-5 h-full'>
          {type == "admin" ? (
            <Fragment>
              <span className=' text-xs text-title'>آیا از پاسخ کارشناس راضی بودید؟</span>
              <div>
                <img src={HappyReactionImg}  onClick={()=>Rate.setRate(Rate.happy)} alt="happy reaction" className={`h-5 w-5 inline-block mr-5  grayscale hover:contrast-150 hover:grayscale-0 cursor-pointer ${Rate.checkRate(moodSelected,messageRate)==1&&"grayscale-0"}`} />
                <img src={badReactionImg}  onClick={()=>Rate.setRate(Rate.bad)} alt=" bad reaction" className={`h-5 w-5 inline-block mr-5 grayscale hover:contrast-150 hover:grayscale-0 cursor-pointer ${Rate.checkRate(moodSelected,messageRate)==2&&"grayscale-0"}`} />
              </div>
            </Fragment>
          ) : (
            <Fragment>
              {/* <span className=' mr-3 text-s text-silver'>پیوست فایل (1)</span>
              <span className=' mr-8 text-s text-silver'>پیوست فایل (2)</span> */}
            </Fragment>
          )}
        </div>
      </div>
    </div>
  )
}
