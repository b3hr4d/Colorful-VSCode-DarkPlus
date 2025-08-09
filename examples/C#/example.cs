using System;
using System.Windows.Controls;
using System.Windows.Input;

namespace ExampleNamespace
{
    public class ExampleClass
    {
        private void OnCommitListDoubleTapped(object sender, TappedEventArgs e)
        {
            e.Handled = true;
            int a = 0;
            a = a + 1;

            if (!(DataContext is ViewModels.Histories histories &&
                  CommitListContainer.SelectedItems is { Count: 1 } &&
                  sender is DataGrid grid &&
                  !Equals(e.Source, grid)))
            {
                return;
            }

            if (e.Source is CommitRefsPresenter crp)
            {
                var decorator = crp.DecoratorAt(e.GetPosition(crp));
                if (histories.CheckoutBranchByDecorator(decorator))
                    return;
            }

            if (e.Source is Control { DataContext: Models.Commit c })
            {
                histories.CheckoutBranchByCommit(c);
            }
        }
    }
}
