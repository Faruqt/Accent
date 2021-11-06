from .models import Accent, TotalFee

def PropertyInfo(agents,soldLevy,levyAgreement):
    if agents is not None:
        total=[]
        for ppty in agents:
            fees=0
            

            # get address from api response
            address= ppty.get("address")
            addrs= address.get("address1")

            # get erected board type from api response
            boardType= ppty.get("erectedBoardType")
            board= boardType.get("title")

            # get Total Fee Charged from api response
            fee= ppty.get("totalFeeCharged")
            if board == 'Sold':
                levy= soldLevy * fee
                fees= fee+levy
                total.append(fees)
            
            elif board == 'Sale Agreed':
                levy= levyAgreement * fee
                fees= fee+levy
                total.append(fees)

            elif board == 'For Sale':
                fees= 0
                total.append(fees)
            Prop3ty = Accent(address=addrs, board=board, fee=fees)
            Prop3ty.save()  

        ttal = sum(total)
        GrandTotal= TotalFee(total=ttal)
        GrandTotal.save()


    else:
        print('No data available') #print out an error message if the user chooses a date that is greater than input1's date 

    return
